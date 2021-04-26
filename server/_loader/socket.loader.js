function socketLoader(io) {

  io.on("connection", socket => {
    // Log whenever a user connects
    console.log("user connected", socket.id);

    // Log whenever a client joins a room from our websocket server
    socket.on("joinRoom", function ({ username, chatroomid }) {
      const user = userJoin(socket.id, `${username} ${users.length?users.length:0}`, chatroomid);
      socket.join(user.room);
      console.log(users)
      // socket.broadcast.to(user.room).emit('message', { type: "new-message", text: `${user.username} has joined the chat` });

      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          { type: "new-message", text: `${username} has joined the chat` }
        );
      // console.log(username,chatroomid,socket.id)
      // console.log("user disconnected");
    });

    socket.on("leftRoom", function () {
      const user = userLeave(socket.id);
    
      if (user) {
        socket.broadcast
        .to(user.room)
        .emit(
          'message',
          { type: "new-message", text: `${user.username} has left the chat` }
        );
      }
      console.log("user disconnected");
    });

    // Log whenever a client disconnects from our websocket server
    socket.on("disconnect", function () {
      const user = userLeave(socket.id);
    
      if (user) {
        socket.broadcast
        .to(user.room)
        .emit(
          'message',
          { type: "new-message", text: `${user.username} has left the chat` }
        );
      }
      console.log("user disconnected");
    });

    // socket.on('chatMessage', msg => {
    //   const user = getCurrentUser(socket.id);
  
    //   io.to(user.room).emit('message', formatMessage(user.username, msg));
    // });

    // When we receive a 'message' event from our client, print out
    // the contents of that message and then echo it back to our client
    // using `io.emit()`
    socket.on("message", message => {
      const user = getCurrentUser(socket.id);
      console.log("Message Received: " + message);
      // io.to(user.room).emit('message', formatMessage(user.username, msg));

      io.to(user.room).emit("message", { type: "new-message", text: message, id: user.username });
    });

    socket.on("notification", notification => {
      // console.log("Message Received: " + message);
      io.emit("notification", { type: "notification", text: notification });
    });

  });

  const users = [];

  // Join user to chat
  function userJoin(id, username, room) {
    const user = { id, username, room };

    users.push(user);

    return user;
  }

  function getCurrentUser(id) {
    return users.find(user => user.id === id);
  }

  function userLeave(id) {
    const index = users.findIndex(user => user.id === id);
  
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  }
}

module.exports = socketLoader