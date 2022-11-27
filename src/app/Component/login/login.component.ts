import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hide=true;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService :UserServiceService,private router :Router) { }
    

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
  this.submitted = true;
  console.log(this.loginForm.value);
  if (this.loginForm.valid) {
    let reqdata = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.userService.login(reqdata).subscribe((Response: any) => {
      console.log(Response);
      localStorage.setItem("token", Response.token);
      this.router.navigateByUrl("/home")
    })
  }
  else {
    console.log("invalid data", this.loginForm.value);
    console.log("no api call");
  }

  }
}

