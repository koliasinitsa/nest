import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name)
  use(req: Request, res: Response, next: () => void) {
    const {body} = req;
    this.logger.verbose(`body is ${JSON.stringify(body, null, 2)}`)
    next();
  }
}
