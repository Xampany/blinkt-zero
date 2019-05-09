import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { Led } from "../shared/led";

@Component({
  selector: "blinkt-led",
  templateUrl: "./led.component.html",
  styleUrls: ["./led.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LedComponent implements OnInit {
  /**
   * Die Led, die angezeigt wird
   */
  @Input()
  led: Led;

  /**
   * Event, das ausgelöst wird, um die Farbe der Led zu ändern
   */
  @Output()
  ledChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  /**
   * Behandelt das Event beim Anklicken der Led
   * @param ev Das Mouse Event
   */
  handleClick(ev: MouseEvent) {
    if (ev.ctrlKey) {
      this.ledChange.emit(this.led.index);
    }
  }

  /**
   * @deprecated Bitte @see {BlinktColorPipe} verwenden
   * @param value Der Farbwert
   */
  getColorString(value: string) {
    return value + "!";
  }
}
