const express = require('express');
const app = express();


const condb = require('./database/connection');



app.listen(3000, ()=>
{
    console.log("app started running on port 3000....");
});