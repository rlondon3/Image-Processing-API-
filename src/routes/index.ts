import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Main Api Connected!');
});

routes.use('/api', image);

export default routes;
