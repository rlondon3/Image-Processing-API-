import express from 'express';
import logger from '../utils/logger';

const image = express.Router();

image.use('/', logger, (req: express.Request, res: express.Response) => {
    res.send('I work too!');
});

export default image;
