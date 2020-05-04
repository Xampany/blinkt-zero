import { Module } from "@nestjs/common";
import { BlinktService } from "./blinkt.service";

@Module({
  providers: [
    {
      provide: BlinktService,
      useClass: BlinktService,
    },
  ],
  exports: [BlinktService],
})
export class BlinktModule {}
