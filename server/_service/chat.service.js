const UserChat = require("../_model/user-chat.model")
const Message = require("../_model/message.model")

// const Verification = require("./verification.service")
const ChatRoom = require("../_model/chat-room.model")

//Users array Hardcoded
const CHATS = [
   new ChatRoom(1,null),
   new ChatRoom(2,null)
]

const USERCHATS = [
    new UserChat(1,1,1),
    new UserChat(2,2,1),
    new UserChat(3,2,2),
    new UserChat(4,3,2),
]

const MESSAGES = [
    new Message(1,'savta',1),
    new Message(2,'dulitel',2),
]

exports.getChatByID = async(chatId,userprofileid,page)=>{
    let myuser = USERCHATS.find(obj=>
        obj.chatid==chatId && obj.userprofileid == userprofileid
    )
    let otheruser = USERCHATS.find(obj=>
        obj.chatid==chatId && obj.userprofileid != userprofileid
    )
    let messages = MESSAGES.filter(obj=>obj.userchatid == myuser.id || obj.userchatid == otheruser.id)
    // for(let msg of messages){
    //     msg.username = msg.userchatid == myuser.id? 
    // }

    return {
        myuser:myuser,
        otheruser:otheruser,
        messages
    }
}
exports.getAllUserChats = async (userprofileid,page) => {

    if (USERCHATS.length != 0)
        return USERCHATS.filter(user_chat=>user_chat.userprofileid == userprofileid)
    return null
}

exports.getUserByID = async (id) => {
    if (!id)
        throw new Error('Couldnt find id')

    let user = USERS.find((obj)=>{
        if(obj.id==id)
            return obj
    })

    // במקרה שלא נמצא ספר
    if(!user)
        return null;

    // במקרה שנמצא ספר
    return user
}

exports.addNewUser = async(user)=>{
    if(!user)
        throw new Error('Problem with receiving user params')
    
    //Verify if all the params exists
    User.isValid(user)
    USERS.push(user)
    return book;
}