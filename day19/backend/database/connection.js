// Here we create an app for database connection


// importing sequelize package as OR
const {Sequelize, DataTypes,} = require('sequelize');
// Here the sequelize package contains lots of 

const sequelize = new Sequelize("postgresql://postgres.yjbgvwugdaavaruuuomc:rajan@224@aws-0-us-east-2.pooler.supabase.com:6543/postgres");
//Creating a Sequelize object called sequelize and passing ORM connection string from Supabase(Postgresql cloud provider)


// const bookModel = require('./models/books');



sequelize.authenticate().then(()=>
{
    console.log("Database connection sucessfull");
}).catch((err)=>
{
    console.log("Error:: "+ err);
})
// promises 


const db = {} 
// empty object db
db.Sequelize = Sequelize;
// attached Sequelize class in db as property 
db.sequelize = sequelize;
// also attached sequelize which is an object of Sequelize class


// added a new key called books which catch the return from the Books from books.js
db.books = require('./models/books.models')(sequelize, DataTypes) //calling bookModel Function in one line 
db.users = require('./models/users.models')(sequelize, DataTypes)



// migrate code 


// sequelize.sync({force : false}).then(()=>{
//     console.log("Migrate Sucessfull");
// })

// force: false garda column update sanga sangai data sabai remove gardincha so we use alter: true


// once the update has been doen then we need to false it 
sequelize.sync({alter: false}).then(()=>{
    console.log("Database update sucessfully using alter: true")
})

 
module.exports = db;
// exported db object so other files can use it by requie()