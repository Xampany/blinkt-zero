import { Module } from "@nestjs/common";
import { BlinktModule } from "../blinkt/blinkt.module";
import { FlashController } from "./flash.controller";

@Module({
  controllers: [FlashController],
  imports: [BlinktModule],
})
export class FlashModule {}
