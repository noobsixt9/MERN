const express = require('express');
const app = express();
app.use(express.json());

const condb = require('./database/connection');

app.get('/books', async (req,res)=>
{
   const datas = await condb.books.findAll() //Select * from book
    res.json({
        messagae : "Books fetched sucessfully",
        data : datas 
    })
})

app.post('/books', async (req, res)=>
{
    // data aayo ki nai API batw json data express js ma "req.body" ma aaucha 
    // const bookName = req.body.bookName;
    // const bookPrice = req.body.bookPrice;

    const {bookName, bookPrice, bookAuthor, bookGenre} = req.body;
    // destructring element
    // console.log(bookName)
    // console.log(bookPrice)

    //inserting data in table
    if (!bookAuthor || !bookGenre || !bookName || !bookPrice)
    {
        return res.status(400).json({
            messagae : "All fields are required"
        })
    }
    else 
    {
        await condb.books.create({
            bookName: bookName, //column name : value
            bookPrice: bookPrice,
            bookAuthor: bookAuthor,
            bookGenre: bookGenre
        })
    }
    res.status(200).json({
        message : "data posted sucessfully"
    })
})


app.listen(3000, ()=>
{
    console.log("app started running on port 3000....");
});