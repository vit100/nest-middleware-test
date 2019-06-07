import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { F1, F2, F3 } from './test-middleware.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void | MiddlewareConsumer {
    consumer
      .apply(F1, F2, F3)
      .exclude('/api')
      .forRoutes('/');
  }
}
