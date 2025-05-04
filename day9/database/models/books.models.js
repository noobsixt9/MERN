//books, bookName, bookPrice, bookAuthor, bookGenre

const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

//creating a table named book[books] and columns [bookName, bookPrice, bookAuthor, bookGenre]

const bookModel = (sequelize, DataTypes)=>{
    //whatever we define the name of the table it will create the plular table name ex: books
    const Book = sequelize.define("book",
        {
            bookName : {
                type : DataTypes.STRING,
                alllowNull : false
            },
            bookPrice : {
                type : DataTypes.INTEGER,
                alllowNull : false
            },
            bookAuthor : {
                type : DataTypes.STRING,
                alllowNull : false
            },
            bookGenre : {
                type : DataTypes.STRING,
                alllowNull : false
            }
        })
        return Book;
}

module.exports = bookModel; //export default bookModel