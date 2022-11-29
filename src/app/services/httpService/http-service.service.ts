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
  getService(url : string, token : boolean = true , httpOptions : any = {}){
    return this.httpclient.get(url,token && httpOptions);
  }
  DeleteService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.delete(url,token && httpHeadersOptions)
  }
  PutService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpclient.put(url, data, token && httpHeadersOptions)
  }

}