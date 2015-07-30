import express from 'express';
import bodyParser from 'body-parser';
import queryTypes from 'query-types';
import cors from 'cors';
import config from '../config';
import routes from './routes';
import pageNotFound from './middlewares/pageNotFound';
import errorHandler from './middlewares/errorHandler';

let app = express();
app.set('env', config.env);
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.use(cors());
app.use(bodyParser.json({limit: '20kb'}));
app.use(bodyParser.urlencoded({limit: '20kb', extended: true}));
app.use(queryTypes.middleware());
app.use(routes, pageNotFound, errorHandler);

export default app;
