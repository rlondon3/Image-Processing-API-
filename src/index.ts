import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/', routes);

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Connected!');
});

app.listen(port, () => {
  console.log(`Application has started at https://localhost${port}`);
});

export default app;
