import { Component, OnInit } from "@angular/core";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"]
})
export class ColorFormComponent implements OnInit {
  color = "";

  constructor() {}

  ngOnInit() {}

  /**
   *
   */
  updateColor(value: Pick<Led, "color">) {
    console.log(value);
  }
}
