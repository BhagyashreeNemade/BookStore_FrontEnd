import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private messageSource = new BehaviorSubject({type:'', data:[]});
  currentData = this.messageSource.asObservable();

  ChangeDataMessage(msg:any){
    console.log(msg);
    this.messageSource.next(msg);
  }
}