import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlinktModule } from "./blinkt/blinkt.module";
import { BrightnessModule } from "./brightness/brightness.module";
import { ColorsModule } from "./colors/colors.module";
import { FlashModule } from "./flash/flash.module";
import { StripModule } from "./strip/strip.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    BlinktModule,
    ColorsModule,
    FlashModule,
    BrightnessModule,
    StripModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
