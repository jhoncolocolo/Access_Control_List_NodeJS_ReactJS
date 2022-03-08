import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../DB.js";

class PermissionRole extends Model {}
PermissionRole.init({
    permission_id : {type : DataTypes.INTEGER, comment : "Permissions Table Id ", allowNull : false},
    role_id : {type : DataTypes.INTEGER, comment : "Roles Table Id ", allowNull : false},
    
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
    modelName: "permission_role"
});

export default PermissionRole