
class User{

    constructor(id,fullname,email,password){
        this.id = id;
        this.fullname=fullname;
        this.email=email
        this.password = password
    }

    static isValid = (user)=>{
        if(!user.fullname ||!user.id || !user.email || !user.password )
        throw new Error('Object isnt from type User')        
    }


}

module.exports = User;