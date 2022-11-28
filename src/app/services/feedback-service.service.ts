import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackServiceService {

  token = localStorage.getItem('token')
  constructor(private httpService :HttpServiceService) { }

  addFeedback(reqData : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postAuthorised('https://localhost:44349/api/FeedBack/Add', reqData, true, header);
  }

  getFeedback(bookId : any){
    let header = {
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44349/api/FeedBack/GetAll?bookId='+bookId, true, header);
  }
}