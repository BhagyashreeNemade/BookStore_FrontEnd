import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { FeedbackServiceService } from 'src/app/services/feedback-service.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  bookId = localStorage.getItem('bookId');
  getBookById: any;
  qty: any;
  review: any;
  star: any;
  feedbackList : any;
  constructor(private getBook: BookServiceService, private feedback : FeedbackServiceService) { }

  ngOnInit(): void {
    this.getbook()
    this.getFeedback()
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
  onsubmit() {
    let reqData = {
      rating: this.star,
      comment: this.review,
      bookId: this.getBookById.bookId
    }
    this.feedback.addFeedback(reqData).subscribe((response : any) =>{
      console.log(response);
    })
  }
  rating1() {
    this.star = 1
    console.log(this.star)
  }
  rating2() {
    this.star = 2
    console.log(this.star)
  }
  rating3() {
    this.star = 3
    console.log(this.star)
  }
  rating4() {
    this.star = 4
    console.log(this.star)
  }
  rating5() {
    this.star = 5
    console.log(this.star)
  }
  getFeedback(){

    this.feedback.getFeedback(this.bookId).subscribe((response : any) => {
      console.log(response);
      this.feedbackList = response.data
      console.log(this.feedbackList)
    })
  }
}
