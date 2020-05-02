import { Module } from "@nestjs/common";
import { BlinktModule } from "../blinkt/blinkt.module";
import { ColorsController } from "./colors.controller";
import { ColorsResolver } from "./colors.resolver";

@Module({
  controllers: [ColorsController],
  imports: [BlinktModule],
  providers: [ColorsResolver],
})
export class ColorsModule {}
