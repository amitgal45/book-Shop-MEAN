import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './_component/UI/header/header.component';
import { MainComponent } from './_component/UI/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { MainSliderComponent } from './_component/Helper/main-slider/main-slider.component';
import { SearchBooksComponent } from './_component/Book/search-books/search-books.component';
import { GetBookComponent } from './_component/Book/get-book/get-book.component';
import { SignInComponent } from './_component/User/sign-in/sign-in.component';
import { SignUpComponent } from './_component/User/sign-up/sign-up.component';
import { JwtModule } from "@auth0/angular-jwt";
import { ChatService } from './_service/chat.service';
import { NavigationComponent } from './_component/UI/navigation/navigation.component';
import { AllChatRoomsComponent } from './_component/Chat/all-chat-rooms/all-chat-rooms.component';
import { ChatRoomComponent } from './_component/Chat/chat-room/chat-room.component';
import { FormsModule } from '@angular/forms';
import { GetAllBooksComponent } from './_component/Book/get-all-books/get-all-books.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainSliderComponent,
    SearchBooksComponent,
    GetBookComponent,
    SignInComponent,
    SignUpComponent,
    NavigationComponent,
    AllChatRoomsComponent,
    ChatRoomComponent,
    GetAllBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // allowedDomains: ["example.com"],
        // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
