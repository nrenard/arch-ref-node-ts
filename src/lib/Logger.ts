import { createLogger, format, transports } from 'winston';

const instance = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'arch-ref-node-ms' },
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.simple()
      )
    })
  ]
});

class Logger {
  static info (text: string) {
    return instance.log('info', text);
  }

  static warn (text: string) {
    return instance.log('warn', text);
  }

  static error (text: string) {
    return instance.log('error', text);
  }
}

export default Logger;
