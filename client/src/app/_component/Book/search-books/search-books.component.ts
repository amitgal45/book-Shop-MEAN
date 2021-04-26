import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-books-component',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  @Input() BOOKS: any; // decorate the property with @Input()
  constructor() { }

  ngOnInit(): void {
  }

}
