
class Book {

    constructor(id, name, price, author) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.author = author
    }

    // Checks if Params Are Missing Or Params are from type they are supposed to get
    static isVerified = (book) => {
        // console.log(Object.getOwnPropertyNames(book))
        if (!book.name || !book.id || !book.price || !book.author)
            throw new Error('Object isnt from type book')
        else if (typeof (book.name) !== 'string' || typeof (book.author) !== 'string' ||
            typeof (book.id) !== 'number' || typeof (book.price) !== 'number')
            throw new Error('Please check your params')
    }

    static toString = () => {
        return `ID: ${book.id}, Name: ${book.name}, Author: ${book.author}, Price: ${book.price}`
    }
}

module.exports = Book;