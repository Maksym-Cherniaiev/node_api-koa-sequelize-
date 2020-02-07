import Koa from 'koa';
import helmet from 'koa-helmet';
import logger from 'koa-morgan';
import winston from './config/winston';
import router from './router';
import bodyParser from 'koa-body';

const app = new Koa();

app.use(helmet());

app.use(bodyParser());

app.use(logger('combined', { stream: winston.stream }));

app.use(router.routes());

exports.start = async() => {
  try {
    await app.listen(3002);
  } catch (error) {
    console.log('You have an error: ', error);
  }
};
