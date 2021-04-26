
class UserChat{

    constructor(id,userprofileid,chatid){
        this.id = id
        this.createdAt = new Date().toISOString()
        this.userprofileid = userprofileid
        this.chatid = chatid
    }

    static isValid = (chatroom)=>{
        if(!user.id ||!user.id || !user.email || !user.password )
        throw new Error('Object isnt from type User')        
    }


}

module.exports = UserChat;