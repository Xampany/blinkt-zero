import { Component, OnInit } from "@angular/core";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-led-list",
  templateUrl: "./led-list.component.html",
  styleUrls: ["./led-list.component.scss"]
})
export class LedListComponent implements OnInit {
  leds: Led[] = [
    {
      index: 0,
      color: "red"
    },
    {
      index: 1,
      color: "green"
    },
    {
      index: 2,
      color: "blue"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
