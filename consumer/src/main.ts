import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://ebziswhj:2baS2aSyqIIrw-Xl9reAIy--gQT4GFNv@jackal.rmq.cloudamqp.com/ebziswhj'],
        queue: 'orders-queue',
      }
    }
  );
  app.listen();
}
bootstrap();
