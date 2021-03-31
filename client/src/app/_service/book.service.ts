import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URLS = "http://localhost:8000"
  getLatestBooks():Observable<any> {
    return this.http.get(`${this.URLS}/api/book`)
  }

  constructor(  private http: HttpClient,
    ) { }
}
