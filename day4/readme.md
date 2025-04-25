
# Day 3

## Supabase
Today i learned about supabase which allows us to create a postgres database for free on cloud which allows us to connect and create database and also it will be accessible via internet not limited locally. 


## ORM
ORM- Object Relation Mapping this is a technique that made it easier for backend to communicate with the realtional database easily. In ORM we don't have to learn sql queries to work with different database it uses different methods for example: user.findAll() this function fetches all data from databases such as postgres, MYSQL etc. 
This makes it easier to perform CRUD operation in database and also makes it more secure. 
Example of ORMs: sequelize, prisma, drizzle etc


## ODM
ODM- Object Document Mapping is similar to ORM where ORM is used with relational database ODM is used with non relational databases such as MongoDB.
Example of ODM: mongoose

## Working of ORM and ODM
ODM and ORM gives us different methods which then are converted to equivalent raw queries based on the datbase type and then forward the raw query to the database. 
So, it maybe be time consuming and less efficent in some applications. 
S