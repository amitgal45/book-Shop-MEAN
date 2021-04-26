import { Component, OnInit, ViewChild } from '@angular/core';
import {ChatService} from './_service/chat.service'
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})

export class AppComponent implements OnInit {
  title


  constructor(private chatService: ChatService){

  }

  ngOnInit(){

    this.chatService.getNewNotification().subscribe((notification: string) => {
      if(notification!="")
        alert(notification)
    })
  }

  sendNotification(){
    this.chatService.sendNotification("New Notification")
  }



}
