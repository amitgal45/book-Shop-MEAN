import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllBooksComponent } from './_component/Book/get-all-books/get-all-books.component';
import { GetBookComponent } from './_component/Book/get-book/get-book.component';
import { ChatRoomComponent } from './_component/Chat/chat-room/chat-room.component';
import { MainComponent } from './_component/UI/main/main.component';
import { SignInComponent } from './_component/User/sign-in/sign-in.component';
import { SignUpComponent } from './_component/User/sign-up/sign-up.component';
import {AuthGuard} from './_guard/auth-guard.guard'

const routes: Routes = [
  { path: 'books', component: GetAllBooksComponent},
  { path: 'book/:id', component: GetBookComponent,canActivate: [AuthGuard]},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'chat/:chatid/:userprofileid', component: ChatRoomComponent },

  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
