import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet = require("helmet");
import { AppModule } from "./app.module";

async function bootstrap() {
  const prefix = "api";
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix(prefix);
  app.use(
    helmet({
      noCache: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle("Blinkt! Raspberry Pi Zero")
    .setDescription("REST API zur Interaktion zwischen Angular UI und Blinkt!")
    .setVersion("1.0")
    .setBasePath(prefix)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(80);
}
bootstrap();
