const express = require('express');
const app = express();

//get method are mostly used to fetch data from the server
app.get("/books", function(req,res)
{
    res.json(
        {
            message: "books fetched sucessfully"
        }
    )
})

//post methods are used to create a new data resource
app.post("/books", function(req, res)
{
    res.json(
        {
            message : "Book added sucessfully"
        }
    )
})

//delete method is used to delete a data resource 
app.delete("/books/:id", function(req, res)
{
    //book delete logic based on id is added here
    res.json({
        message: "Book deleted sucessfully"
    })
})

//patch method is used to partially update the data such as only title of the book
//  where as put request updates the whole data
app.patch("/books/:id", function(req, res)
{
    //book delete logic based on id is added here
    res.json({
        message: "Book Updated sucessfully"
    })
})







app.listen(3000, ()=>
{
    console.log("app started running on port 3000....");
})