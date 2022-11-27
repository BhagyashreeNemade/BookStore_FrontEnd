import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';

const routes: Routes = [
  {path:'register', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component : ForgetComponent},
  {path:'reset/:token', component : ResetComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
