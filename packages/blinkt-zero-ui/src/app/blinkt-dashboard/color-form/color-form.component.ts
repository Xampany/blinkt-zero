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
  mapTo,
  tap,
  withLatestFrom
} from "rxjs/operators";
import * as tinycolor from "tinycolor2";
import { Led } from "../../blinkt-common/shared/led";

function colorValidator(): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          tinycolor(control.value).isValid()
            ? null
            : {
                color: true
              }
        );
      }, 400);
    });
  };
}

@Component({
  selector: "blinkt-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"]
})
export class ColorFormComponent implements OnInit {
  @Output()
  colorChange = new EventEmitter<Pick<Led, "color">>();

  color = "red";

  form: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    const input = this.fb.control(
      {
        value: this.color,
        disabled: false
      },
      {
        asyncValidators: colorValidator()
      }
    );

    this.form = this.fb.group({
      color: input
    });

    const input$ = input.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    input.statusChanges
      .pipe(
        tap(res => console.log(res)),
        filter(status => status === "VALID"),
        mapTo(true),
        withLatestFrom(input$)
      )
      .subscribe({
        next: res => {
          const color = res[1];
          this.updateColor({ color });
        }
      });
  }

  /**
   *
   */
  updateColor(value: Pick<Led, "color">) {
    this.colorChange.emit(value);
  }
}
