import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Led } from "../shared/led";

@Component({
  selector: "blinkt-led",
  templateUrl: "./led.component.html",
  styleUrls: ["./led.component.scss"]
})
export class LedComponent implements OnInit {
  @Input()
  led: Led;

  @Output()
  ledChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  /**
   *
   */
  handleClick(ev: MouseEvent) {
    if (ev.ctrlKey) {
      this.ledChange.emit(this.led.index);
    }
  }
}
