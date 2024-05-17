import { Injectable } from '@nestjs/common';
import winston, { Logger } from 'winston';
import { winstonConfig } from './winston.config';

@Injectable()
export class LoggerService {
  private readonly logger: Logger;

  constructor() {
    this.logger = winston.createLogger(winstonConfig);
  }

  log(message: string) {
    this.logger.log({ level: 'info', message });
  }

  error(message: string) {
    this.logger.log({ level: 'error', message });
  }
}
