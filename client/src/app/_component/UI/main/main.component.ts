import { Component, OnInit } from '@angular/core';
import {BookService} from 'src/app/_service/book.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public BOOKS =[];
  constructor(private BookService:BookService) { }

  getAllBooks(){
  return this.BookService.getLatestBooks()
    .subscribe(books=>{
      this.BOOKS=books
    })
  }
  ngOnInit(): void {
    this.getAllBooks()
  }

}
