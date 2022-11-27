import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token = localStorage.getItem('token');


  constructor(private httpServise : HttpServiceService) { }

  
  registerUser(reqdata : any){
    let header = {
      headers:new HttpHeaders({
        'Content-type':'application/json',
      })
    }
    return this.httpServise.postService('https://localhost:44349/api/User/Register', reqdata, false, header);
  }

  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpServise.postService('https://localhost:44349/api/User/Login',reqdata,false,header)
  }
 

  forgot(reqData :any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
    })
  }
  return this.httpServise.postService('https://localhost:44349/api/User/ForgotPassword?emailId='+ reqData.emailId, {}, false , header);
  }

  reset(reqData:any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpServise.postAuthorised(`https://localhost:44349/api/User/Reset?resetPassword=`+reqData.resetPassword+`&confirmPassword=`+reqData.confirmPassword,{}, true , header);
  }
}