import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  RegisterForm! : FormGroup;
  hide=true;

  constructor( private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.RegisterForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      EmailId: ['', Validators.required],
      Password: ['', Validators.required],
      Mobile: ['', Validators.required]
    })
  }
}
