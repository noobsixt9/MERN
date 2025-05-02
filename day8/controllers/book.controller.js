// another way of exporting function is just add exports.functionName()

const { books } = require("../database/connection");



exports.fetchBooks =  async (req,res)=>
    {
       const datas = await books.findAll() //Select * from book
        res.json({
            messagae : "Books fetched sucessfully",
            data : datas 
        })
    }

exports.addBook = async (req, res)=>
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
            await books.create({
                bookName: bookName, //column name : value
                bookPrice: bookPrice,
                bookAuthor: bookAuthor,
                bookGenre: bookGenre
            })
        }
        res.status(200).json({
            message : "data posted sucessfully"
        })
    }

exports.deleteBook =  async (req,res)=>
    {
       const datas = await books.findAll() //Select * from book
        res.json({
            messagae : "Books Deleted sucessfully",
            data : datas 
        })
    }


exports.editBook =  async (req,res)=>
    {
       const datas = await books.findAll() //Select * from book
        res.json({
            messagae : "Books Updated sucessfully",
            data : datas 
        })
    }


exports.singleFetchBook = async function(req, res)
{
    // get the user data ``id``from url 
    const id = req.params.id 
    // param.id because the parameter name in url is called ```id```

    const datas = await books.findByPk(id)
    const datass = books.findAll(
        {
            where : {
                id : id
            }
        }
    )
    // find from books table whose primary key is id
    res.json({
        message :"Id has been succesfully fetched",
        datas,
        datass
    })
}

// exporting all these functions 
// module.exports = {fetchBooks, deleteBook, addBook, editBook}
