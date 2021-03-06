import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LedComponent } from "./led/led.component";
import { LoaderComponent } from "./loader/loader.component";
import { BlinktColorPipe } from "./shared/blinkt-color.pipe";
import { ColorService } from "./shared/color.service";
import { PiUrl } from "./shared/PiUrl";

@NgModule({
  declarations: [LedComponent, LoaderComponent, BlinktColorPipe],
  imports: [CommonModule, HttpClientModule],
  exports: [LedComponent, LoaderComponent, BlinktColorPipe],
  providers: [
    {
      provide: ColorService,
      useClass: ColorService
    },
    {
      provide: "PiUrl",
      useValue: PiUrl.URL_2
    }
  ]
})
export class BlinktCommonModule {}
