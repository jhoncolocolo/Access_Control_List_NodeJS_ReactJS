import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../DB.js";

class Role extends Model {}
Role.init({
    name : {type : DataTypes.STRING(255), comment : "Role's Table name", allowNull : false},
    role : {type : DataTypes.STRING(120), comment : "Role's Table role", allowNull : false},
    description : {type : "TEXT", comment : "Role's Table description", allowNull : true},
    
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
    modelName: "role"
});

export default Role