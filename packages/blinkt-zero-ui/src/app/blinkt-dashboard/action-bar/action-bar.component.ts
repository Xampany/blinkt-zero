import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "blinkt-action-bar",
  templateUrl: "./action-bar.component.html",
  styleUrls: ["./action-bar.component.scss"]
})
export class ActionBarComponent implements OnInit {
  @Output()
  refresh = new EventEmitter<void>();

  @Output()
  flash = new EventEmitter<void>();

  @Output()
  strip = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  /**
   *
   */
  handleRefresh() {
    this.refresh.emit();
  }

  /**
   *
   */
  handleFlash() {
    this.flash.emit();
  }

  /**
   *
   */
  handleStrip() {
    this.strip.emit();
  }
}
