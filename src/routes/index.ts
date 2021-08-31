import express from 'express';
import image from './api/image';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Main Api Connected!');
});
routes.get('*', (req: express.Request, res: express.Response): void => {
  res.send(
    'Bad Route. Return to https://localhost3000 or enter a valid router.'
  );
});

routes.use('/', image);

export default routes;
