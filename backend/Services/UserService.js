import UserModel from "../Database/Models/User.js";
import RoleUserModel from "../Database/Models/RoleUser.js";
import RoleModel from "../Database/Models/Role.js";
import PermissionRole from "../Database/Models/PermissionRole.js";
import PermissionModel from "../Database/Models/Permission.js";
import {  Model, DataTypes, Sequelize } from "sequelize";
import sequelize from "../Database/DB.js";

const getPermissionRouteByUser = (user_id,route_name) => {
    return new Promise((resolve, reject) =>{
      sequelize.query("select `users`.`id`, `users`.`name`, `permissions`.`name`, `route` from `users` inner join `role_users` on `role_users`.`user_id` = `users`.`id` left join `permission_roles` on `permission_roles`.`role_id` = `role_users`.`role_id` left join `permissions` on `permissions`.`id` = `permission_roles`.`permission_id` where `users`.`id` = "+user_id+" and `permissions`.`route` = '"+route_name+"' or (role_users.role_id = 1 and users.id = "+user_id+")", 
        { type: sequelize.QueryTypes.SELECT})
      .then(users => {
        if(users[0]){
          resolve(true);
        } else {
          resolve(false);
        }
      })

    });
}

export default getPermissionRouteByUser