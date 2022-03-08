import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../DB.js";

class Permission extends Model {}
Permission.init({
    name : {type : DataTypes.STRING(255), comment : "Permission's Table name", allowNull : false},
    route : {type : DataTypes.STRING(255), comment : "Permission's Table route", allowNull : false},
    description : {type : "TEXT", comment : "Permission's Table description", allowNull : true},
    
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
    modelName: "permission"
});

export default Permission