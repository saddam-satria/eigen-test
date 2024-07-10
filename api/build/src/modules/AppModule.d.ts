import { NestModule, MiddlewareConsumer } from '@nestjs/common';
declare class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void;
}
export default AppModule;
