const express = require('express'); //including express.js module
const app = express();  //initalizing expressjs


//routing to /
app.get("/",(req,res)=>
{
    res.send("hello world");
})

//routing to /about
app.get("/about",function(req, res)
{
    res.send("This is about page");
})





app.listen(3000,function(){
    console.log("npm start is started on port 3000");
}); 