const Book = require("../_model/book.model")

const BOOKS = [
    { id: 1, name: 'Book1', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 2, name: 'Book2', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 3, name: 'Book3', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 4, name: 'Book4', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 5, name: 'Book5', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 6, name: 'Book6', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 7, name: 'Book7', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 8, name: 'Book8', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 1, name: 'Book1', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 2, name: 'Book2', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 3, name: 'Book3', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 4, name: 'Book4', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 5, name: 'Book5', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 6, name: 'Book6', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 7, name: 'Book7', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 8, name: 'Book8', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 1, name: 'Book1', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 2, name: 'Book2', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 3, name: 'Book3', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 4, name: 'Book4', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 5, name: 'Book5', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 6, name: 'Book6', author: 'author2', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg' },
    { id: 7, name: 'Book7', author: 'author3', price: 45,imageUrl:'https://www.e-vrit.co.il/Images/Products/newcovers/haemet_al_beemet_master(2).jpg' },
    { id: 8, name: 'Book8', author: 'author4', price: 20,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
]


exports.getAllBooks = async () => {
    if (BOOKS.length != 0)
        return BOOKS
    return null
}

exports.getBookByID = async (id) => {
    if (!id)
        throw new Error('Couldnt find id')

    let book = BOOKS.find((obj)=>{
        if(obj.id==id)
            return obj
    })

    // במקרה שלא נמצא ספר
    if(!book)
        return null;

    // במקרה שנמצא ספר
    return book
}

exports.addNewBook = async(book)=>{
    console.log(book)
    if(!book)
        throw new Error('Problem with receiving user params')
    //Verify if all the params exists
    Book.isVerified(book)
    BOOKS.push(book)
    return book;
}