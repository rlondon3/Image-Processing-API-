import express from 'express';
import formatter from '../../utils/formatter';
import config from '../../configuration';
import logger from '../utils/logger';

const image = express.Router();

image.get(
  '/image',
  logger,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const file = req.query.file as string;
    const imagePath = `${config.ASSETS_FOLDER}/img/${file}.jpg`;
    const outputFile = `${config.ASSETS_FOLDER}/thumb/${req.query.file}${req.query.width}X${req.query.height}.jpg`;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    try {
      if (!imagePath) {
        console.error('File invalid!');
      } else if (!outputFile) {
        await formatter(file, width, height);
      }
      if (!width || !height) {
        res.statusCode = 400;
        console.error('Error: width & height invalid.');
      } else if (isNaN(width) || isNaN(height)) {
        res.statusCode = 404;
        console.error('Error: width & height values are invalid.');
      } else {
        res.status(200).sendFile(outputFile);
      }
    } catch (err) {
      console.error('Cannot get image location', err);
    }
  }
);

export default image;
