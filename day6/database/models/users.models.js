const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const userModel = (sequelize, DataTypes) => 
{
   const users =  sequelize.define("user",{
        username : {
            type: DataTypes.STRING
        },
        password : {
            type : DataTypes.STRING
        }
    })
    return users;
}

module.exports = userModel;