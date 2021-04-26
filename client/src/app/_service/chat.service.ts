import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";


@Injectable({
  providedIn: 'root',
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  public notification$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private http:HttpClient) {}

  public getChatDetails(chatid,userprofileid):Observable<any>{
    return this.http.get(`http://localhost:8000/api/chat/id/${chatid}/${userprofileid}`)
  }

  socket = io('http://localhost:8000');

  public sendMessage(message) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

  public sendNotification(notification) {
    this.socket.emit('notification', notification);
  }

  public getNewNotification = () => {
    this.socket.on('notification', (notification) =>{
      this.notification$.next(notification.text);
    });
    
    return this.notification$.asObservable();
  };

  public joinRoom() {
    this.socket.emit('joinRoom', {username:"amitgal",chatroomid:1});
  }

  public leaveRoom(){
    this.socket.emit('leftRoom',null)
  }


}