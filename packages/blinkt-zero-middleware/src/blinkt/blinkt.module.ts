import { Module } from "@nestjs/common";
import { BlinktStubService } from "./blinkt-stub/blinkt-stub.service";
import { BlinktService } from "./blinkt.service";

@Module({
  providers: [
    {
      provide: BlinktService,
      useClass: BlinktStubService,
    },
  ],
  exports: [BlinktService],
})
export class BlinktModule {}
