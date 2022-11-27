import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { ForgetComponent } from './Component/forget/forget.component';
import { ResetComponent } from './Component/reset/reset.component';
import { SignupComponent } from './Component/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  {path:'register', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'forgot', component : ForgetComponent},
  {path:'reset/:token', component : ResetComponent},
  {path :'home', component : HomeComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
