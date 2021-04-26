
class Message{

    constructor(id,content,userchatid){
        this.id = id
        this.createdAt = new Date().toISOString()
        this.content = content
        this.userchatid = userchatid
    }

    static isValid = (chatroom)=>{
        if(!user.id ||!user.id || !user.email || !user.password )
        throw new Error('Object isnt from type User')        
    }


}

module.exports = Message;