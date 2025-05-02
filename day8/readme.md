# Day 8

### Refactoring 
Code refactoring is the process of improving a program's internal structure (design, organization, and implementation) without altering its external behavior or functionality.
So inorder to do so we use MVC Pattern (Model, View, Controller) 


Controller: it includes that part of codes which can commmunicate with frontend and also capable of database connectivity . Intermediary between frontend and backend.



We created a ```controllers `` folder which includes all of the controller code such as functions that are responsible for database fetch, update and delete. 
In this code we can export modules like exports.functionName() 


We created a ```routes``` folder which includes all of the routing and its function in a chained way 
```router.route("/books",).get(fetchBooks).post(addBook)``` This includes both route, request method and lastly the controller function from the ./controllers/book.controller.js  


Lastly we need to import the routes from the routes folder into the main app.js which also includes the controller code. 

```app.use("/api/", bookRoute)``` This is to use the bookRoute from ```const bookRoute = require("./routes/bookRoutes")```

This all of the code managing is called code refactoring using MVC pattern in development. 




