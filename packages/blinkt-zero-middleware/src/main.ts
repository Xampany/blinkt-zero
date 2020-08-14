import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import helmet from "helmet";
import nocache from "nocache";
import { AppModule } from "./app.module";

async function bootstrap() {
  const prefix = "api";
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: true,
    },
  );
  app.setGlobalPrefix(prefix);
  app.use(helmet({
    contentSecurityPolicy:false
  }));
  app.use(nocache());

  const config = new DocumentBuilder()
    .setTitle("Blinkt! Raspberry Pi Zero")
    .setDescription(
      "REST API zur Interaktion zwischen (Angular / React) UI und Blinkt!",
    )
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);

  await app.listen(80, "0.0.0.0");
}
bootstrap();
