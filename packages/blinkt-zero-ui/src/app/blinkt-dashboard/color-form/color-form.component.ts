import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  withLatestFrom
} from "rxjs/operators";
import * as tinycolor from "tinycolor2";
import { Color } from "../../blinkt-common/shared/led";

/**
 * Erzeugt einen asynchronen Validierer für Farbwerte
 * @param delay Die Verzögerung in [ms], mit der der Validierer reagieren soll
 */
function colorValidator(delay = 0): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          tinycolor(control.value).isValid()
            ? null
            : {
                color: true
              }
        );
      }, delay);
    });
  };
}

@Component({
  selector: "blinkt-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"]
})
export class ColorFormComponent implements OnInit {
  /**
   * Der Event Emitter, der nach Änderungen des Farbwerts im Formular aktiv wird
   */
  @Output()
  colorChange = new EventEmitter<Color>();

  /**
   * Die initiale Farbe
   */
  color = "red";

  /**
   * Das (reaktive) Formular
   */
  form: FormGroup;

  /**
   *
   * @param fb Der Form-Builder
   */
  constructor(private readonly fb: FormBuilder) {}

  /**
   * Formular initialisieren
   */
  ngOnInit() {
    const input = this.fb.control(
      {
        value: this.color,
        disabled: false
      },
      {
        asyncValidators: colorValidator(400)
      }
    );

    this.form = this.fb.group({
      color: input
    });

    const value$ = input.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(String)
    );

    input.statusChanges
      .pipe(
        filter(status => status === "VALID"),
        withLatestFrom(value$),
        map(([, color]): Color => ({ color }))
      )
      .subscribe({
        next: color => {
          this.updateColor(color);
        }
      });
  }

  /**
   * @param value Die eingegebene Farbe
   */
  updateColor(value: Color) {
    this.colorChange.emit(value);
  }
}
