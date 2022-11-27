import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgotForm! : FormGroup;
  submitted = false;
    constructor(private formBuilder : FormBuilder) { }
  
    ngOnInit(): void {
      this.forgotForm = this.formBuilder.group({
        email : ['', Validators.required]
      })
    }
}