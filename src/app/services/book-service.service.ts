import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  token = localStorage.getItem('token');
constructor(private httpService : HttpServiceService) { }

getallbooks(){
  let header = {
    headers : new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  console.log(this.token);
  return this.httpService.getService('https://localhost:44349/api/Book/GetAllBook',true, header);
}
}
