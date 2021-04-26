import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URLS = "http://localhost:8000"
  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  userLogin(email, password): Observable<any> {
    return this.http.post(`${this.URLS}/login`, {email,password})
  }

  isAuth(token): Observable<any> {
    return this.http.post(`${this.URLS}/auth`, {token})
  }

  storeToken(token: string,exp:number) {
      localStorage.setItem('token', token)
      localStorage.setItem('exp',exp.toString())
  }


  constructor(private http: HttpClient) { }
}
