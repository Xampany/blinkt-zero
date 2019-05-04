import { Module } from "@nestjs/common";
import { BlinktService } from "./blinkt.service";

@Module({
  providers: [BlinktService],
  exports: [BlinktService],
})
export class BlinktModule {}
