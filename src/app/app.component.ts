import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-path-showcase-reactive-forms-ed';
  form!: FormGroup;
  isFormIncorrect = false;
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
        firstname: new FormControl({value: "", disabled: false}, Validators.required),
        lastname: new FormControl("", Validators.required)
      }),
      email: new FormControl("", [Validators.required, Validators.email]),
      gender: new FormControl("", Validators.required),
      receiveEmails: new FormControl(false),
      region: new FormControl({value: "", disabled: true},Validators.required),
      telephones: new FormArray([])
    });
    this.addTelephoneNumber();
  }

  addTelephoneNumber() {
    this.telephones.push(new FormControl("", [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(7)]
    ));
  }

  removeTelephoneNumberAt(index: number) {
    this.telephones.removeAt(index);
  }

  onSubmit() {
    if(this.form.valid){
      this.isFormIncorrect = false;
      // send data to the backend
    } else {
      this.isFormIncorrect = true;
      this.form.markAllAsTouched()
    }
    console.log(this.form);
  }

  get firstname() {
    return this.form.get('fullname')?.get('firstname') as FormControl;
  }

  get lastname() {
    return this.form.get('fullname')?.get('lastname') as FormControl;
  }

  get email(){
    return this.form.get("email") as FormControl;
  }

  get telephones() {
    return this.form.get("telephones") as FormArray;
  }
}
