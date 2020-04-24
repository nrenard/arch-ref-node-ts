import 'module-alias/register';

import logger from './lib/Logger';

import server from './server';

server.listen(process.env.PORT, () => {
  logger.info(`Server is running on port: ${process.env.PORT}`);
});
