import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('token')

    if(!token){
      alert("Token is not found in Local Storage")
      return false
    }

    if(this.jwtHelper.isTokenExpired(token)){
      alert("JWT Token has been expired")
      return false
    }


    // console.log(this.jwtHelper.decodeToken(token))
    if (this.jwtHelper.decodeToken(token) != false)
      return true

  }

  /**
   *
   */
  constructor(private authService: AuthService, public jwtHelper: JwtHelperService) {

  }
}
