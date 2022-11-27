import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private httpServise : HttpServiceService) { }

  


  login(reqdata:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpServise.postService('https://localhost:44349/api/User/Login',reqdata,false,header)
  }

}