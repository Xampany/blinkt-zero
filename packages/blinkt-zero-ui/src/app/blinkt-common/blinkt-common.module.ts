import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { LedComponent } from "./led/led.component";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [LedComponent, LoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [LedComponent, LoaderComponent]
})
export class BlinktCommonModule {}
