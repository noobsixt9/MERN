const express = require('express');
const app = express();

// if frontend and backend is built both in backend then the architecture of web app is called monolithic architecture

app.get("/api",(req,res)=>
{
    res.json(
        {
            "name":"test"
        }
    )
})

app.get("/json", function(req,res)
{
    res.send("This is not an api but a route. API have json format which can be used to send data from frontend to backend and alos to store data. ");
})


app.listen(3000,()=>{
    
    console.log("app started on port 3000...");
})
