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
    const imagePath = `${config.ASSETS_FOLDER}${file}.jpg`;
    const outputFile = `${config.ASSETS_FOLDER}/thumb/${req.query.file}${req.query.width}X${req.query.height}.jpg`;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    //res.redirect('/api/image?file=china&width=200&height=200');

    try {
      if (!file) {
        res.send('Enter a file name.');
        return;
      }

      if (!imagePath || !width || !height) {
        res.send('Image name, width, and height required in the URL.');
        return;
      }
      if (isNaN(width) || isNaN(height)) {
        res.send('Error: width & height values are invalid.');
        return;
      }
      if (!fs.existsSync(outputFile)) {
        res.status(404);
        res.send('Invalid Url');
        return;
      }
      if (fs.existsSync(outputFile)) {
        return res.status(200).sendFile(outputFile);
      } else {
        await formatter(file, width, height);
        return res.status(200).sendFile(outputFile);
      }
    } catch (err) {
      console.error('Cannot get image!', err);
    }
    return;
  }
);

export default image;
