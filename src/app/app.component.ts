import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-path-showcase-reactive-forms-ed';
  form!: FormGroup;

  constructor() {
    this.setFormInitialValues();
  }

  private setFormInitialValues(){
    this.form = new FormGroup<any>({
      fullname: new FormGroup({
        firstname: new FormControl(),
        lastname: new FormControl()
      }),
      email: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.form.get("fullname")?.get("firstname")?.value);
  }
}
