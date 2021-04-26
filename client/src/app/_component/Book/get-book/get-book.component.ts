import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/_service/book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  constructor(
    private BookService:BookService,
    private route: ActivatedRoute,
    private router: Router) { 
    
  }

  public book:any;
  public writterBooks:any[]
  getBookById(id){
    return this.BookService.getBookById(id)
      .subscribe(books=>{
        this.book=books
        console.log(this.book)
      })
    }

    getAuthorBooks(){
      return this.BookService.getLatestBooks()
        .subscribe(books=>{
          this.writterBooks=books
          console.log(this.writterBooks)
        })
      }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.getBookById(bookId)
    this.getAuthorBooks()
  }

}
