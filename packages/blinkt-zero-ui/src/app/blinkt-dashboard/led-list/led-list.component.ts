import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subject } from "rxjs";
import { switchMap, take, takeUntil } from "rxjs/operators";
import { ColorService } from "../../blinkt-common/shared/color.service";
import { Color, Led } from "../../blinkt-common/shared/led";

@Component({
  selector: "blinkt-led-list",
  templateUrl: "./led-list.component.html",
  styleUrls: ["./led-list.component.scss"]
})
export class LedListComponent implements OnInit, OnDestroy {
  /**
   * Die Liste der Leds
   */
  leds: Led[];

  /**
   * Subject zum sicheren Löschen aller Subscriptions
   */
  private readonly destroy$ = new Subject();

  // tslint:disable-next-line: variable-name
  constructor(private readonly _color: ColorService) {}

  /**
   * Initiales Setup
   */
  ngOnInit() {
    this.loadLeds();
  }

  /**
   * Aufräumen vor dem Löschen der Komponente
   */
  ngOnDestroy() {
    this.destroy$.next();
  }

  /**
   * Aktualisiert die Farbe einer Led
   * @param index Der Index der Led
   */
  updateLed(index: number) {
    this._color.updateColor$(index).subscribe({
      next: led => (this.leds[index] = led)
    });
  }

  /**
   * Aktualisiert die Farbe aller Leds
   * @param value Die Farbe
   */
  updateLeds(value: Color) {
    this._color.updateColors$(value).subscribe({
      next: leds => (this.leds = leds)
    });
  }

  /**
   * Lädt die Liste der Leds
   */
  loadLeds() {
    const interval$ = interval(500);

    const colors$ = this._color.readColors$();

    interval$
      .pipe(
        take(1),
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
