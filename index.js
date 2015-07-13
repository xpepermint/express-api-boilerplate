import express from 'express';
import routes from './app/routes';

let app = express();
app.use(routes);

export default app;
