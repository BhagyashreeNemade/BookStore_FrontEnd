import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {


  constructor(private httpclient: HttpClient) { }


  postService(url: string,reqdata:any, token: boolean= false, httpOptions: any ){

    return this.httpclient.post(url,reqdata,token && httpOptions)
  
  }
  postAuthorised(url : string, reqdata : any, token : boolean = true, httpOptions:any){
    return this.httpclient.post(url, reqdata, token && httpOptions);
  }

}