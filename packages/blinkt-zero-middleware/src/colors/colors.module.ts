import { Module } from "@nestjs/common";
import { BlinktModule } from "../blinkt/blinkt.module";
import { ColorsController } from "./colors.controller";

@Module({
  controllers: [ColorsController],
  imports: [BlinktModule],
})
export class ColorsModule {}
