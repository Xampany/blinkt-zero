import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subject } from "rxjs";
import { switchMap, take, takeUntil } from "rxjs/operators";
import { ColorService } from "src/app/blinkt-common/shared/color.service";
import { Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-led-list",
  templateUrl: "./led-list.component.html",
  styleUrls: ["./led-list.component.scss"]
})
export class LedListComponent implements OnInit, OnDestroy {
  leds: Led[];

  private readonly destroy$ = new Subject();

  // tslint:disable-next-line: variable-name
  constructor(private readonly _color: ColorService) {}

  ngOnInit() {
    this.loadLeds();
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  /**
   *
   */
  loadLeds() {
    // this._color.readColorsPromise().then(leds => (this.leds = leds));
    const interval$ = interval(10000);

    const colors$ = this._color.readColorsObservable();

    interval$
      .pipe(
        take(2),
        takeUntil(this.destroy$),
        switchMap(() => colors$)
      )
      .subscribe({
        next: leds => (this.leds = leds),
        error: err => console.warn("bam!", err),
        complete: () => console.log("habe fertig")
      });
  }
}
