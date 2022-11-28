import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from 'src/app/services/book-service.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {

  bookList : any;
  totalBooks: any;
  constructor(private bookService : BookServiceService, private route : Router) { }

  ngOnInit(): void {
    this.onSubmit()
  }

  onSubmit(){
    this.bookService.getallbooks().subscribe((response : any) =>{
      console.log(response);
      this.bookList = response.data;
      this.totalBooks = response.data.length;
      console.log(this.bookList);
      console.log(this.totalBooks)
    })
  }
  quickView(books : any){
    console.log(books.bookId)
    localStorage.setItem('bookId', books.bookId);
    this.route.navigateByUrl("/home/quickView")
  }


}