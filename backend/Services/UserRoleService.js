import UserModel from "../Database/Models/User.js";
import RoleUserModel from "../Database/Models/RoleUser.js";
import RoleModel from "../Database/Models/Role.js";

const getUserAuth = (username,password) => {
    return new Promise((resolve, reject) =>{

        UserModel.findAll({
          include: [ {
            model: RoleUserModel,
            as: "role_users",
            attributes: ['user_id', 'role_id'],
            include:  
            [{
              model : RoleModel ,
              as : 'role' ,
              attributes : ['id','name'],
              where:{ name :"Admin" }
            }]
          }],
          where:{ email :username, password : password }
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
                    email:user.email,
                    name:user.name,
                    isAdmin:isAdmin
              });
            } else {
              reject(`Username or Credential are wrong`);
            }
      });

    });
}

export default getUserAuth