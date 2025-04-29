# Creating Tables and Columns

We need to create separate folder inside   ``database`` called ``models`` where we create all the database table and query codes

Inoder to create a table and columns in it we first need to create a function which requires parameters called ``(sequelize, DataTypes)`` and then inside that function we call a method called ``define()`` from ``sequelize `` object and inside it we create coulmn names.

### Table name always gets created as plural ex: table --> tables
```
const testModel = (sequelize, DataTypes)=>
{
  const test =  sequelize.define("tablename",
  {
    columnName : {
        type : DataTypes.STRING
    },
    columnName2 : {
        type : DataTypes.INTEGER
    }
  })
  return test 
}

module.exports = testModel
```
After this we need to add this module in our ``connection.js``

```
require('./databases/test.model.js)(sequelize,DataTypes)
```

And lastly we need to migrate or synce this code to make changes to the databases and to do so we can use following two method from ``sequelize`` object

```
sequelize.sync({force : false})
```
Using force : false is not recommended because it not only updates the column names but also resets the data which results in data loss from table.
It drops the table if it already exists and then recreates it.

```
sequelize.sync({alter: true})
```
Using alter: true is recommended because it only updates the column name without affecting the table data and after once updating the column name we need to update value of alter to false.


