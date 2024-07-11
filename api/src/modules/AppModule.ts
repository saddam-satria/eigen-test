import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import AppController from 'src/controllers/AppController';
import AppService from 'src/services/AppService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { STATIC_ASSETS } from 'src/config/constant';
import MemberModule from './MemberModule';
import BookModule from './BookModule';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: STATIC_ASSETS,
      serveRoot: '/assets',
      serveStaticOptions: {
        cacheControl: true,
      },
    }),
    MemberModule,
    BookModule,
  ],
})
class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}

export default AppModule;