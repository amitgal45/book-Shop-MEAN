const User = require("../_model/user.model")
const Verification = require("./verification.service")

//Users array Hardcoded
const USERS = [
    { id: 1, fullname: 'Book1', email: 'author1', password: 40 },
    { id: 2, fullname: 'Book2', email: 'author2', password: 30 },
    { id: 3, fullname: 'Book3', email: 'author3', password: 45 },
    { id: 4, fullname: 'Book4', email: 'author4', password: 20 },
]


exports.getAllUsers = async () => {
    if (USERS.length != 0)
        return USERS
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