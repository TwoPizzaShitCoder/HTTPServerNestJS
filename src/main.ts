import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {AppDataSource} from "./core/database";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await AppDataSource.initialize()
    // await AppDataSource.synchronize()
    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({
        enableDebugMessages: true,
        whitelist: true,
        skipUndefinedProperties: true,
        forbidNonWhitelisted: true,
        transform: true
    }));
    await app.listen(3000);
}

bootstrap();
