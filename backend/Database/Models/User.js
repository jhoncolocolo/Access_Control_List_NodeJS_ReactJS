import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../DB.js";

class User extends Model {}
User.init({
    name : {type : DataTypes.STRING(255), comment : "User's Table name", allowNull : false},
    email : {type : DataTypes.STRING(255), comment : "User's Table email", allowNull : false},
    email_verified : {type : "TIMESTAMP",defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), comment : "User's Table email_verified", allowNull : true},
    password : {type : DataTypes.STRING(255), comment : "User's Table password", allowNull : false},
    remember_token : {type : DataTypes.STRING(100), comment : "User's Table remember_token", allowNull : true},
    api_token : {type : DataTypes.STRING(100), comment : "User's Table api_token is important for conection with frontends not owns of backend", allowNull : true},
    
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
        field: 'updated_at'
    }
}, {
    sequelize,
    modelName: "user"
});

export default User