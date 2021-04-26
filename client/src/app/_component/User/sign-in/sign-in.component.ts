import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  SignIn(username, password) {
    console.log(username,password)
    return this.authService.userLogin(username, password).subscribe(
      user => {
        if (user.error)
          alert(user.error.message)
        else
          this.authService.storeToken(user.token,user.exp)
      }
    )
  }

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.SignIn('author1', '40')
  }

}
