import express from 'express';
import formatter from '../../utils/formatter';
import config from '../../configuration';
import logger from '../utils/logger';
import fs from 'fs';

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
      if (!imagePath || !width || !height) {
        return res
          .status(400)
          .sendFile('Image name, width, and height required in the URL.');
      }
      if (isNaN(width) || isNaN(height)) {
        return res
          .status(400)
          .sendFile('Error: width & height values are invalid.');
      }
      if (fs.existsSync(imagePath)) {
        await formatter(file, width, height);
        return res.status(200).sendFile(outputFile);
      } else {
        res.status(404).send('Image not found!');
      }
    } catch (err) {
      console.error('Cannot get image!', err);
    }
  }
);

export default image;
