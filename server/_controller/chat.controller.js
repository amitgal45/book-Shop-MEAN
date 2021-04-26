const ChatService = require('../_service/chat.service')
const Book = require('../_model/book.model')

exports.getAllChats = async (req,res,next)=>{
    const userprofileid = req.params.userprofileid;
    const page = req.params.page;
    return await ChatService.getAllUserChats(userprofileid,page)
    .then(chats=>{
        res.status(200).json(chats)
    })
    .catch(err=>next(err))
}

exports.getChatByID = async (req,res,next)=>{
    let chatid = req.params.chatid;
    let userprofileid = req.params.userprofileid;
    // let page = req.params.id;

    console.log(chatid)
    return await ChatService.getChatByID(chatid,userprofileid,1)
    .then(chat=>{
        res.status(200).json(chat)
    })
    .catch(err=>next(err))
}

exports.addBook = async (req,res,next)=>{
    let book = req.body;
    console.log(book)
    console.log( book instanceof Book)
    return await BookService.addNewBook(book)
    .then(book=>{
        res.status(200).json(book)
    })
    .catch(err=>next(err))
}