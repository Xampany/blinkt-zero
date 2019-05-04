import { NestFactory } from "@nestjs/core";
import helmet = require("helmet");
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    helmet({
      noCache: true,
    }),
  );
  await app.listen(80);
}
bootstrap();
