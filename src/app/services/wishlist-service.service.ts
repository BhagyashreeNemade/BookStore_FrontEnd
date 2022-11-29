import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService  {
  token:any;

  constructor(private http: HttpServiceService) { 
    this.token = localStorage.getItem('token');
  }

  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44349/api/Wishlist/GetAllWishlist',true,header)
  }

  addToWishlist(reqData:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.postAuthorised('https://localhost:44349/api/Wishlist/Add?BookId='+bookId, reqData, true, header);
  }

  removeFromWishlist(wishListId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.DeleteService('https://localhost:44349/api/Wishlist/Delete?wishlistId='+wishListId,true,header)
  }
}
