import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import yamljs from 'yamljs';
import swaggerUiExpress from 'swagger-ui-express';

const yamlDoc = yamljs.load(__dirname + '\\swagger.yaml');

@Injectable()
export class F1 implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.url.includes('api')) {
      return next();
    }
    req.url = req.originalUrl;
    return swaggerUiExpress.serve[0].call(this, req, res, next);
  }
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class F2 implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.url.includes('api')) {
      return next();
    }
    req.url = req.originalUrl;
    return swaggerUiExpress.serve[1].call(this, req, res, next);
  }
}

// tslint:disable-next-line:max-classes-per-file
@Injectable()
export class F3 implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    if (req.url.includes('api')) {
      return next();
    }
    req.url = req.originalUrl;
    return swaggerUiExpress.setup(yamlDoc).call(this, req, res, next);
  }
}
