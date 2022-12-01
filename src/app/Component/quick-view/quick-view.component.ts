import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  bookId = localStorage.getItem('bookId');
  book:any;
  rating:any=0.0;
  comment:any;
  feedbackList:any;
  getBookById: any;
  qty: any;
  review: any;
  star: any;
  books: any;
  constructor(private getBook: BookServiceService, private feedback : FeedbackServiceService,private wishservice: WishlistServiceService,private cart:CartServiceService) { }

  ngOnInit(): void {
    this.getbook()
    this.getAllFeedback(this.bookId)
  }
  getbook() {
    this.getBook.getBookById(this.bookId).subscribe((response: any) => {
      this.getBookById = response.data;
      this.qty = response.data.quantity;
      console.log(this.bookId)
      console.log(this.getBookById);
      console.log(this.qty);
    })
  }

  
  getAllFeedback(bookId: any){
    this.feedback.getAllFeedback(bookId).subscribe((response: any) => {
      console.log("GetAll feedback successful", response);
      this.feedbackList = response.data;
    });
  }
  addFeedback(){
    let reqData = {
      rating: parseInt(this.rating),
      comment: this.comment,
      BookId: this.getBookById.bookId
    }
    this.feedback.addFeddback(reqData).subscribe((response: any) => {
      console.log("Feedback submitted successfully", response);
      this.getAllFeedback(this.bookId);
    });
    this.comment='';
    this.rating=0.0;
  }
 
  getShortName(name:any){
    return name.split(' ').map((n:any) => n[0]).join('');
  }
  addToWishlist(){
    let reqData = {
      bookId: this.getBookById.bookId,
    }
    this.wishservice.addToWishlist(reqData,this.bookId).subscribe((response: any) => {
      console.log("Added to wishlist", response);
    });
  }
  addToCart(){
    let reqData = {
      bookId : this.getBookById.bookId,
      quantity : 1
    }
    this.cart.addToCart(reqData).subscribe((response :any) =>{
      console.log(response)
    })
  }
}
