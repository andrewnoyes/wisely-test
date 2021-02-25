import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

import { AppModule } from './app.module';

const PORT = process.env.PORT || 1337;

const corsOptions = {
    origin: (origin: string, cb: Function) => {
        cb(null, true);
    },
};

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors(corsOptions);

    const options = new DocumentBuilder().setTitle('Wisely Test API').setVersion('1.0').build();
    const document = SwaggerModule.createDocument(app, options);

    // TODO: writing out swagger changes on restart for dev
    fs.writeFileSync('./api-swagger-spec.json', JSON.stringify(document));

    SwaggerModule.setup('swagger', app, document);

    await app.listen(PORT);
}

bootstrap();
