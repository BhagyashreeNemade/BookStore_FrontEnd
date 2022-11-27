import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  RegisterForm! : FormGroup;
  hide=true;
  submitted = false;

  constructor( private formBuilder : FormBuilder, private userService :UserServiceService) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      EmailId: ['', Validators.required],
      Password: ['', Validators.required],
      Mobile: ['', Validators.required]
    })
  }
  onSubmit() {
    this.submitted = true;
    

    if (this.RegisterForm.valid) {
      console.log("valid data",this.RegisterForm.value);
    console.log("do api call");
      let reqdata = {
        fullName: this.RegisterForm.value.FullName,
        email: this.RegisterForm.value.EmailId,
        password: this.RegisterForm.value.Password,
        mobile_Number: this.RegisterForm.value.Mobile
      }
      this.userService.registerUser(reqdata).subscribe((Response: any) => {
        console.log(Response);
      })
    }
    else{
      console.log("invalid data",this.RegisterForm.value);
      console.log("no api call");
    }
  
  }
}
