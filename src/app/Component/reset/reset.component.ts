import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  resetForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private userService :UserServiceService) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }
  onSubmit(){
    this.submitted = true;
    if(this.resetForm.valid){
    console.log('valid', this.resetForm.value)
    let reqData = {
      resetPassword : this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmPassword
    }
    this.userService.reset(reqData).subscribe((response : any) =>{
      console.log(response);
    })
    }
  }
}
