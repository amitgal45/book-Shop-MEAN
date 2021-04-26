const BookService = require('../_service/books.service')
const Book = require('../_model/book.model')

exports.getAllBooks = async (req,res,next)=>{
    return await BookService.getAllBooks()
    .then(books=>{
        res.status(200).json(books)
    })
    .catch(err=>next(err))
}

exports.getBookByID = async (req,res,next)=>{
    let bookid = req.params.id;
    console.log(bookid)
    return await BookService.getBookByID(bookid)
    .then(book=>{
        console.log(book)

        res.status(200).json(book)
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