import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  langs: Array<string>;
  myform: FormGroup;  //myform is an instance of FormGroup and represents the form itself
  firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
  rating: FormControl;

  constructor(private loginService: LoginService) {
    this.langs = [
        "English",
        "French",
        "German"
      ];
  }
    
  onSubmit() {
      if (this.myform.valid) {
      this.loginService.setEmpList(this.myform.value)
      .subscribe(res =>console.log("****************"));
      this.myform.reset();  //inbuilt function by angular4
      }
  }
      
  createFormControls() {
      this.firstName = new FormControl('', Validators.required);
      this.lastName = new FormControl('', [Validators.required, this.lastNameValidator]);
      this.email = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*"),
      this.emailDomainValidator
      ]);
      this.rating = new FormControl('', Validators.required);
      this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
      ]);
      this.language = new FormControl('', Validators.required);
      }

    lastNameValidator(control) { 
      let lastName = control.value; 
      if (lastName && !lastName.includes("patil")) { 
      return {
      lastNameValid: {
      parsedDomain: lastName
      }
      }
      }
      return null; 
      }

    emailDomainValidator(control: FormControl) { 
      let email = control.value; 
      if (email && email.indexOf("@") != -1) { 
        let [_, domain] = email.split("@"); 
        if (domain !== "codecraft.tv") { 
          return {
            emailDomain: {
              parsedDomain: domain
            }
          }
        }
      }
      return null; 
    }

    createForm() {
        this.myform = new FormGroup({
      //   name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      //   }),
        email: this.email,
        rating: this.rating,
        password: this.password,
        language: this.language
        });
    }
        
    

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

}
