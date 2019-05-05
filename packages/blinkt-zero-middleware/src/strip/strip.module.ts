import { Module } from "@nestjs/common";
import { BlinktModule } from "../blinkt/blinkt.module";
import { StripController } from "./strip.controller";

@Module({
  controllers: [StripController],
  imports: [BlinktModule],
})
export class StripModule {}
