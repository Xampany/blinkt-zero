import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { debounceTime, tap } from "rxjs/operators";
import { Led } from "../../blinkt-common/shared/led";

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
      [Validators.required, Validators.minLength(3)]
    );

    this.form = this.fb.group({
      color: input
    });

    input.valueChanges
      .pipe(
        debounceTime(1000),
        tap(value => console.log(value))
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
