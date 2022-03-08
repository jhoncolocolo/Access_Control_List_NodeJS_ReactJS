import RoleModel from "../Database/Models/Role.js";
import PermissionRole from "../Database/Models/PermissionRole.js";
import PermissionModel from "../Database/Models/Permission.js";

const getUserAuth = (route) => {
    return new Promise((resolve, reject) =>{

        RoleModel.findAll({
          include: [ {
            model: PermissionRole,
            as: "permission_roles",
            attributes: ['permission_id', 'role_id'],
            include:  
            [{
              model : PermissionModel ,
              as : 'permission' ,
              attributes : ['id','name','route'],
              where:{ route :route }
            }]
          }]
        })
        .then((results) => {            
            var user = results[0]
            var isAdmin = false
            //here do you logic with results 
            if (results[0]) {
              //Verified Admin
              if(results[0].role_users.length > 0 ) isAdmin = true;
              resolve({
                    id:user.id,
                    username:user.username,
                    isAdmin:isAdmin
              });
            } else {
              reject(`Username or Credential are wrong`);
            }
      });

    });
}

export default getUserAuth