// import { Injectable } from '@angular/core';
// import {io} from 'socket.io-client';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Rx';
// import { AnonymousSubject } from 'rxjs/internal/Subject';

// // import { environment } from '../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {

//   // Our socket connection
//   private socket;

//   constructor() { }

//   connect(): AnonymousSubject<MessageEvent> {
//     // If you aren't familiar with environment variables then
//     // you can hard code `environment.ws_url` as `http://localhost:5000`
//     this.socket = io("http://localhost:8000", {
//       withCredentials: true,
//       extraHeaders: {
//         "my-custom-header": "abcd"
//       }
//     });

//     // We define our observable which will observe any incoming messages
//     // from our socket.io server.
//     let observable = new Observable(observer => {
//         this.socket.on('message', (data) => {
//           console.log("Received message from Websocket Server")
//           observer.next(data);
//         })
//         return () => {
//           this.socket.disconnect();
//         }
//     });

//     // We define our Observer which will listen to messages
//     // from our other components and send messages back to our
//     // socket server whenever the `next()` method is called.
//     let observer = {
//         next: (data: Object) => {
//             this.socket.emit('message', JSON.stringify(data));
//         },
//     };

//     // we return our Rx.Subject which is a combination
//     // of both an observer and observable.
//     // const subby = new AnonymousSubject<any>(observer, observable);
//     // return subby;
//     observable.subscribe((value: any) => console.log(value));
//     observer.next("");
//     // return AnonymousSubject:<any> = 
//     // return new AnonymousSubject<T>(observer, observable);
//     // return new AnonymousSubject(observe,observer)
//     // return (observable,observer)
//   }

// }