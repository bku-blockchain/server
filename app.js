import express from 'express';
import http from 'http';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
// import RateLimit from 'express-rate-limit';

import routes from './routes';

/** Configure App Express */
const app = express();

// const ONE_MINUTE = 60 * 1000;
// const limiter = new RateLimit({
//   windowMs: 5 * ONE_MINUTE, // milliseconds, how long to keep records
//   max: 100, // limit each IP to 100 requests per windowMs
//   delayMs: 0 // disable delaying - full speed until the max limit is reached
// });

// usage for middlewares
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet({ frameguard: { action: 'deny' } }));
app.use(compression());

app.use(express.static(path.join(__dirname, './public/')));

// app.use('/api/', limiter);

app.get('/', (req, res, next) => {
  res.send('Hello to BKU Most');
});

app.use('/', routes);


// redirect other path to ./build
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(err);
});


const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
