const Book = require("../_model/book.model")

const BOOKS = [
    { id: 1, name: 'Book1', author: 'author1', price: 40,imageUrl:'https://www.e-vrit.co.il/Images/Products/covers_2019_b/newart_updated_master.jpg' },
    { id: 2, name: 'ארבע ההסכמות', author: 'דון מיגל רואיז', price: 30,imageUrl:'http://megafon-news.co.il/asys/wp-content/uploads/2012/09/670598.jpg',
    summary:`<p>
    דון מיגואל רואיס נולד למשפחה של מרפאים והתחנך באזור הכפרי של מקסיקו על ידי אם שהיתה קוראנדרה (מרפאה) וסב שהיה נגואל (שמאן). המשפחה ציפתה לכך שמיגואל יאמץ את המורשת המשפחתית בת מאות השנים של הריפוי וההוראה, ויעביר הלאה את הידע האזוטרי הטולטקי.
    </br> </br>
    </p>
    <p>
    במקום, בהשפעת החיים המודרניים, בחר מיגואל ללמוד בבית הספר לרפואה ולהפוך לרופא מנתח. תאונת דרכים שינתה את חייו. בשעה מאוחרת באחד הלילות בשלהי שנת 1970, התעורר לפתע לאחר שנרדם על ההגה בשעת נהיגה. בו ברגע התנגשה המכונית במהירות בקיר בטון. דון מיגואל זוכר שהיה מחוץ לגופו הגשמי כאשר משך את שני חבריו למקום מבטחים.
    </br> </br>
    </p>
    <p>
    מזועזע מן החוויה, החל בחקירה-עצמית אינטנסיבית. הוא התמסר לרכישת בקיאות בחכמה העתיקה של האבות הקדמונים, ולמד אצל שמאן רב-עוצמה במדבר מקסיקו. סבו, שכבר נפטר, המשיך ללמד אותו בחלומותיו.
    </br> </br>
    </p>
    <p>
    על פי המסורת של הטולטקית, הנגואל מנחה את האדם לעבר החופש האישי. דון מיגואל רואיס הוא נגואל משושלת אביר העיט, ומקדיש את חייו לשיתוף הידע שרכש על התורות של הטולטקים הקדומים.
    </br> </br>
    </p>
    <p>
    דון מיגואל רואיס מגלה בספרו "ארבע ההסכמות" את מקור האמונות המגבילות הגוזלות מאיתנו את השמחה ויוצרת סבל מיותר. ארבע ההסכמות, המושתתים על החוכמה הטולטקית העתיקה, מעניקים צופן רב-עוצמה של התנהגות אשר יכול להפוך במהירות את חיינו לחוויה של חופש, אושר אמיתי ואהבה.
    </br> </br>
    </p>` },
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