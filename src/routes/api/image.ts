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
    const outputFile = `${config.ASSETS_FOLDER}/thumb/${req.query.file}${req.query.wdith}X${req.query.height}.jpg`;
    const imagePath = `${config.ASSETS_FOLDER}/full/${file}.jpg`;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    const found = await imagePath;
    const outputFileSent = await outputFile;

    try {
      if (!found) {
        res.send('File invalid!');
      } else if (!outputFileSent) {
        await formatter(file, width, height);
        res.status(200).sendFile(outputFile);
      }
      if (!width || !height) {
        res.statusCode = 400;
        res.send('Error: width & height invalid.');
      } else if (isNaN(width) || isNaN(height)) {
        res.statusCode = 404;
        res.send('Error: width & height values are invalid.');
      }
    } catch (err) {
      console.error('Cannot get image location', err);
    }
  }
);

export default image;
