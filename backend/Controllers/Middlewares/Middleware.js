import getPermissionRouteByUser from "../../Services/UserService.js";
import jwt from "jsonwebtoken";


const verify = async (req,res,next) => {
      let $user = "";
      const authHeader = req.headers.authorization;
      if(authHeader){

        const token = authHeader.split(" ")[1];
        jwt.verify(token,"mySecretKey",(err,user) =>{
          if(err){
            return res.status(403).json("Token is not valid");
          }
          $user = user;  
        })

        let $result = await getPermissionRouteByUser($user.id,req.route.name);
        if($result){
          req.user = $user;
          next();
        }else{
          res.status(401).json("You are not Authorized")
        }
      }else{
        res.status(401).json("You are not Authenticated")
      }
}

export default verify