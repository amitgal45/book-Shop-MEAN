
class ChatRoom{

    constructor(id,lastActivity){
        this.id = id
        this.createdAt = new Date().toISOString()
        this.lastActivity = lastActivity


    }

    static isValid = (chatroom)=>{
        if(!user.id ||!user.id || !user.email || !user.password )
        throw new Error('Object isnt from type User')        
    }


}

module.exports = ChatRoom;