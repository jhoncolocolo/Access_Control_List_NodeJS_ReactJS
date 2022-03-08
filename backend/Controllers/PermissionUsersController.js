import PermissionUserModel from "../Database/Models/PermissionUser.js";
import PermissionModel from "../Database/Models/Permission.js";
import UserModel from "../Database/Models/User.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllPermissionUsers = async (req,res) => {
    try {
        PermissionUserModel.findAll({
            include: [
                {
                    model : PermissionModel ,
                    as : 'permission' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : UserModel ,
                    as : 'user' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(permission_users => res.json(permission_users));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getPermissionUser = async (req,res) => {
    try {
        PermissionUserModel.findAll({
            where:{ id :req.params.id },
            include: [
                {
                    model : PermissionModel ,
                    as : 'permission' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : UserModel ,
                    as : 'user' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(permission_users => res.json(permission_users[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createPermissionUser = async (req,res) => {
    try {
        await PermissionUserModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updatePermissionUser = async (req,res) => {
    try {
        await PermissionUserModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deletePermissionUser = async (req,res) => {
    try {
        await PermissionUserModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}