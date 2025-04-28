# Database Connectivity in NodeJs

Inorder to connect our node app with backend database(postgres) we need a ORM(object relation mapping) for relational databases such as mysql, postresql etc and ODM(Object Data Mapping) for non relaitonal databases such as mongodb. 

For postgresql we used sequlize ORM using: ```npm install sequelize```
Note: You can search this in [npmjs.com](npmjs.com)

Now we need to install Database driver for connecting our app to postgresql database. The database driver used for postgresql is called ```pg``` using command ```npm install pg``` .

#### Note: We can install multiple node packages using ```npm install package1 package2 package3``` and the versioning is called Semantic Versioning or SemVersion which have format of major.minor.patch



## Desturcture Elements 
In Js we destructured element refers to the variables or values that are extracted from an object or an array

```const {Sequelize, DataTypes,} = require('sequelize');```
Here, sequelize is a whole library that contains mutiple functions, classes, objects etc. 

```Sequelize```: This is a class and in JS class have pascal naming convention which means the first letter is Capital Letter.

```DataTypes``` : This is an object from sequelize library






## Module vs Package vs Library in JS

1. Module: Smallest unit of code in Js. A single file or chunk that exports or imports functionality. Every .js file is a module in Node.js

we can create custo modules using ``exports``  keyword

```
// math.js
module.exports = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};
```

1. Package: A collection of Modules bundled together. It is something that can be installed with ```npm``` or ```yarn```.
It usullay has ```package.json``` file that defines 
    1. metadata(name, version, author)
    1. dependencies (all of the installed packages)
    1. entry point (like starting app main: "app.js")
A package might be one module or many modules combined together
Example: express, pg, sequelize

1. Library: General term for any collection of reusabel code that can be functions, classes, objects, utilities etc. A library can be one package or even just a module. We use library by calling its methds not by controling main flow. 
Example Sequelize