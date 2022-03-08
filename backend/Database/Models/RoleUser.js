import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../DB.js";

class RoleUser extends Model {}
RoleUser.init({
    role_id : {type : DataTypes.INTEGER, comment : "Roles Table Id ", allowNull : false},
    user_id : {type : DataTypes.INTEGER, comment : "Users Table Id ", allowNull : false},
    
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
    modelName: "role_user"
});

export default RoleUser