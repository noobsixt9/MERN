# DAY 7 PERN
Note: In js if key: value is same name then we can only used the name only once 
data : data = data 

## MVC architecture pattern 
Model View Controller is a software design pattern which is used to structure application mostly web applications.

This includes user interfaces, data and controlling logic.

Separates the code sin different folder for different functionalities such as UI, API, data and business logic[ORM, ODM] etc.

1. Model : 
    Manages data, lofic and rules of the application
    independent of the user interfaces
    updates the view when the data chanegs 
2. View :
    handles the presentation layer
    displays data from model to the user 
    includes UI in this 
    send user actions like button click to the controller
3. Controller :
    acts as an intermediary between the model and the view 
    recieves input from the view, process it(updates the odel) and returns the out to the view 
    API code

### Analaogy :
Model : kitchen[ that managers the food and reciepes]
View : Waiter presenting the food
Controller : The waiter taking order and giving them to the kitchen 
Other example: MVCR(Model, View, Controller, ), MVT (Model[Database], View[logical code], Template[UI ])[django]


## API creation with DB 
create route function and add database object which intialize the table example: connection.db.books 

 ```condb.books.findAll()```  //Select * from book : to fetch all of the book data from database 
 always gives data in array

```condb.books.create({
    columnName : value,
    columnName : value,
    columnName : value,
})```   //insert data into the table



 while doing db query, frontend api call/http request, file read, IO operation, it takes some time so we have to use ```async, await ``` asynchoronous operations 

```aysnc ``` marks a function as asynchoronous and that function will always return a promise, even if its returns a value.


```await ``` can only be used inside async function, it pauses the execution of the function until the promise is resolved or rejected. 

### Promises : 
Promises in js is like a gurantee that you'll get result later - either sucess or failure.
promise States:
    pending: async task is still running
    Fulfilled: task has completed successfully(resilved)
    Rejected: task has faile(rejected)


```
app.get('/books', async (req,res)=>
{
   await condb.books.findAll() //Select * from book
    res.json({

    })
})

```


Inorder to recieve json data from express js it is stored in ``req.body`` but it won't get parsed unitll we specify ```app.use(express.json())``