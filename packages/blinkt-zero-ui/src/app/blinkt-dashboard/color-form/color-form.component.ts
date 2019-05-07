import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidatorFn
} from "@angular/forms";
import { debounceTime, distinctUntilChanged, filter } from "rxjs/operators";
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
      }, 3000);
    });
  };
}

@Component({
  selector: "blinkt-color-form",
  templateUrl: "./color-form.component.html",
  styleUrls: ["./color-form.component.scss"]
})
export class ColorFormComponent implements OnInit {
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

    input.valueChanges
      .pipe(
        debounceTime(300),
        filter(() => this.form.valid),
        distinctUntilChanged()
      )
      .subscribe({
        next: () => this.updateColor(this.form.value)
      });
  }

  /**
   *
   */
  updateColor(value: Pick<Led, "color">) {
    console.log(value);
  }
}
