import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from './httpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  token: any;
  constructor(private http: HttpServiceService) {
    this.token = localStorage.getItem('token');
  }

  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.getService('https://localhost:44349/api/Cart/GetAllCartlist', true, header);
  }

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.postAuthorised('https://localhost:44349/api/Cart/Add', reqData, true, header);
  }

  updateCart(cartId: any, cartQty: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService('https://localhost:44349/api/Cart/UpdateQty?cartId=' + cartId + '&cartQty=' + cartQty, cartId, true, header);
  }

  removeFromCart(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.DeleteService('https://localhost:44349/api/Cart/Delete?cartId='+cartId, true, header);
  }
}
