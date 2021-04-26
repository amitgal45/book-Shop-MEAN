import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from 'src/app/_service/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit,OnDestroy {

  newMessage: string;
  messageList: any[] = [];

  constructor(private chatService:ChatService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getChat()
    this.joinRoom()
    this.chatService.getNewMessage().subscribe((message: string) => {
      if(message!="")
        this.messageList.push(message);
    })
  }

  getChat():void{
    const chatid = this.route.snapshot.paramMap.get('chatid');
    const userprofileid = this.route.snapshot.paramMap.get('userprofileid')
    this.chatService.getChatDetails(chatid,userprofileid).subscribe(
      obj=>{
        for(let i of obj.messages){
          this.messageList.push({type:'new-message',id:i.id,text:i.content,userchatid:i.userchatid})
        }
        console.log(this.messageList)
      }
    )

  }
  ngOnDestroy():void{
    this.leaveRoom()
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  leaveRoom(){
    this.chatService.leaveRoom()
  }

  joinRoom(){
    this.chatService.joinRoom()
  }

}
