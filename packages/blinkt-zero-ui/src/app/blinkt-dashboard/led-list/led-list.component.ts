import { Component, OnInit } from "@angular/core";
import { ColorService } from "src/app/blinkt-common/shared/color.service";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-led-list",
  templateUrl: "./led-list.component.html",
  styleUrls: ["./led-list.component.scss"]
})
export class LedListComponent implements OnInit {
  leds: Led[];

  // tslint:disable-next-line: variable-name
  constructor(private readonly _color: ColorService) {}

  ngOnInit() {
    this.loadLeds();
  }

  /**
   *
   */
  loadLeds() {
    this._color.readColors().then(leds => (this.leds = leds));
  }
}
