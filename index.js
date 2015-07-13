import express from 'express';
import bodyParser from 'body-parser';
import queryTypes from 'query-types';
import routes from './app/routes';

let app = express();
app.set('trust proxy', 'loopback');
app.set('x-powered-by', false);
app.use(bodyParser.json({limit: '20kb'}));
app.use(bodyParser.urlencoded({limit: '20kb', extended: true}));
app.use(queryTypes.middleware());
app.use(routes);

export default app;
