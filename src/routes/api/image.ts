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

    //res.redirect('/api/image?file=china&width=200&height=200');

    try {
      if (!file || !width || !height) {
        res.send(
          'Url requires file, width, and height. Exampe: api/image?file=china&width=200&height=200'
        );
      } else if (width < 100 || height < 100) {
        res.send('Width and height must be over 100.');
      } else if (fs.existsSync(outputFile)) {
        return res.status(200).sendFile(outputFile);
      } else if (fs.existsSync(imagePath)) {
        await formatter(file, width, height);
        return res.status(200).sendFile(outputFile);
      } else {
        res
          .status(404)
          .send(
            'File does not exist. Please check the file name and try again.'
          );
        return;
      }
    } catch (err) {
      console.error('Cannot get image!', err);
    }
    return;
  }
);

export default image;
