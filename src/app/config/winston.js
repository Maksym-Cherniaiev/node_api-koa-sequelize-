import { createLogger, transports } from 'winston';

import { config, defineFormat } from './winstonConfig';

const { file, console, error } = config;

const logger = createLogger({
  format: defineFormat
});

logger.add(
  new transports.File(file)
);

logger.add(
  new transports.Console(console)
);

logger.add(
  new transports.File(error)
);

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

export default logger;
