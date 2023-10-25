import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-path-showcase-reactive-forms-ed';
  form!: FormGroup;
  regions = ["Choose a region...*", "Attica", "Central Greece", "Central Macedonia", "Crete",
    "Eastern Macedonia and Thrace", "Epirus", "Ionian Islands", "North Aegean",
    "Peloponnese", "South Aegean", "Thessaly", "Western Greece", "Western Macedonia", "Mount Athos"];


  constructor() {
  }

  ngOnInit(): void {
    this.setFormInitialValues();
  }

  private setFormInitialValues() {
    this.form = new FormGroup<any>({
      fullname: new FormGroup({
        firstname: new FormControl("Ioannis"),
        lastname: new FormControl("Daniil")
      }),
      email: new FormControl(""),
      gender: new FormControl("female"),
      receiveEmails: new FormControl(false),
      region: new FormControl("Attica"),
      telephones: new FormArray([])
    });
    this.addTelephoneNumber();
  }

  addTelephoneNumber() {
    this.telephones.push(new FormControl());
  }

  removeTelephoneNumberAt(index: number) {
    this.telephones.removeAt(index);
  }

  get telephones() {
    return this.form.get("telephones") as FormArray;
  }

  onSubmit() {
    console.log(this.form.get("fullname")?.get("firstname")?.value);
  }
}
