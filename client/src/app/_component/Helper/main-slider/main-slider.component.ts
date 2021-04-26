import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent implements OnInit {
  @Input() BOOKS: any; // decorate the property with @Input()
  @Input() TITLE:string;
  _selectedBook:number[] = [0,1,2];


  goFoward(){
    this._selectedBook.shift()
    let number = this._selectedBook[1]+1>this.BOOKS.length-1?0:this._selectedBook[1]+1;
    this._selectedBook.push(number)
  }

  goBack(){
    this._selectedBook.pop()
    let number = this._selectedBook[0]-1<0?this.BOOKS.length-1:this._selectedBook[0]-1;
    this._selectedBook = [number,...this._selectedBook]
  }

  constructor() { }

  ngOnInit(): void {

  }

}
