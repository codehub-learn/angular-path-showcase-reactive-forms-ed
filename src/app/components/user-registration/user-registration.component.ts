import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  userRegistrationForm: FormGroup = this.fb.group({
    firstname: this.fb.control("", [Validators.required, Validators.pattern("^[a-zA-Z]*$")]),
    lastname: this.fb.control("", Validators.required),
    receiveEmails: this.fb.control(true),
    gender: this.fb.control("other")
  });

  /*
      userRegistrationForm: FormGroup = new FormGroup({
      firstname: new FormControl("Ioannis"),
      lastname: new FormControl("Daniel")
    });
    */

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userRegistrationForm);
    console.log(this.userRegistrationForm.get("firstname")?.value);
    if (this.userRegistrationForm.valid) {
      console.log("successfully submitted");
    } else {
      console.log("form contains errors");
    }
  }
}
