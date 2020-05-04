import { Module } from "@nestjs/common";
import { BlinktModule } from "../blinkt/blinkt.module";
import { FlashController } from "./flash.controller";
import { FlashResolver } from './flash.resolver';

@Module({
  controllers: [FlashController],
  imports: [BlinktModule],
  providers: [FlashResolver],
})
export class FlashModule {}
