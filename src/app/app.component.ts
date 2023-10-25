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
  }

  private setFormInitialValues(){
    this.form = new FormGroup<any>({
      fullname: new FormControl()
    });
  }
}
