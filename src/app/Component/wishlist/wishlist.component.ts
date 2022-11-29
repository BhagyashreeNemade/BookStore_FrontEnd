import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent  implements OnInit {

  wishListItems : any
  qty : any;
  getWishListBooks = new Array()
  constructor(private wishListservice : WishlistServiceService, private books : BookServiceService) { }

  ngOnInit(): void {
    this.getWishlist()
  }
  getWishlist() {
    this.wishListservice.  getWishlist().subscribe((response : any) => {
      console.log(response);
      this.wishListItems = response.data
      this.qty = this.wishListItems.length
      this.wishListItems.forEach((element : any) =>{
        console.log(element)
        this.books.getBookById(element.bookId).subscribe((response : any)=>{
          console.log(response)
          this.getWishListBooks.push(response.data)
        })
      })
      console.log(this.getWishListBooks)
    })
  }
  removeFromWishlist(wishListId:any){
    console.log("bbbbbbbb",wishListId);
    this.wishListservice.removeFromWishlist(wishListId).subscribe((response : any) =>{
      console.log(response);
      this.getWishlist();
    });
  }
}