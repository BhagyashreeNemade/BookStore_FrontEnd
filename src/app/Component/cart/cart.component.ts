import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartlist: any;
  defaultImage: any = "https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  step: number = 0;

  fullName: any;
  mobileNumber: any;
  addressList: any;
  addressId = 0;
  addressObj: any;
  isAddEditAddress: boolean = false;
  edit =false;
  address: any;
  city: any;
  state: any;
  addressType: any
  bookId: any;
  qty: any;

  constructor(private cart: CartServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name');
    this.mobileNumber = localStorage.getItem('mobile');
    this.getCartlist();
  }

  getCartlist() {
    this.cart.getCartItems().subscribe((response: any) => {
      console.log("Got All cart items", response.data);
      this.cartlist = response.data;
      this.qty = this.cartlist.length;
      console.log('BookIds : ', this.cartlist);
      console.log('BookIds : ', this.cartlist.cartsQty);
    });
  }

  decreaseQty(cartId: any, cartsQty: any) {
    this.cart.updateCart(cartId, (cartsQty - 1)).subscribe((response: any) => {
      console.log("Cart Qty decreased",cartsQty);
      this.getCartlist();
    })
  }

  increaseQty(cartId: any, cartsQty: any) {
    this.cart.updateCart(cartId, (cartsQty + 1)).subscribe((response: any) => {
      console.log("Cart Qty increased");
      this.getCartlist();
    })
  }

  stepUp2() {
    this.step = 2;
  }

  stepUp() {
    this.step = 1;
  }


  removeFromCart(cartId: any) {
    this.cart.removeFromCart(cartId).subscribe((response: any) => {
      console.log("Removed from cart");
      this.getCartlist();
    })
  }


  


  
  
}