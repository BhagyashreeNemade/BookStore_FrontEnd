import { Component, OnInit } from '@angular/core';
import { BookServiceService } from 'src/app/services/book-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  bookList:any;
  sortBy:any="Sort by relevence";
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  searchString:any;
  totalbooks:any;
  page: number = 1;
  subscription:any;
  message:any;
  searchWord:any;
  
  constructor(private bookser:BookServiceService, private data:DataServiceService) { }

  ngOnInit(): void {
    
  
    this.getAllBooks();
    this.subscription = this.data.currentData.subscribe(message => {
      this.message = message;
      console.log("display card search data======", message.data[0]);
      this.searchWord=message.data[0]
      // this.getAllNotes();
    })
  
  }

  getAllBooks(){
    this.bookser.getAllBooks().subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.totalbooks= response.data.length;
      this.bookList = response.data;
    });
  }

  relevence(){  
    this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";
  }

  PriceLowToHigh(){
    this.bookList = this.bookList.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.bookList = this.bookList.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
     this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="Newest First";
  }
  
  quickView(bookId:any){
    localStorage.setItem('bookId',bookId)
  }
}