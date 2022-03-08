import RoleUserModel from "../Database/Models/RoleUser.js";
import RoleModel from "../Database/Models/Role.js";
import UserModel from "../Database/Models/User.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllRoleUsers = async (req,res) => {
    try {
        RoleUserModel.findAll({
            include: [
                {
                    model : RoleModel ,
                    as : 'role' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : UserModel ,
                    as : 'user' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(role_users => res.json(role_users));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getRoleUser = async (req,res) => {
    try {
        RoleUserModel.findAll({
            where:{ id :req.params.id },
            include: [
                {
                    model : RoleModel ,
                    as : 'role' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : UserModel ,
                    as : 'user' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(role_users => res.json(role_users[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createRoleUser = async (req,res) => {
    try {
        await RoleUserModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updateRoleUser = async (req,res) => {
    try {
        await RoleUserModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deleteRoleUser = async (req,res) => {
    try {
        await RoleUserModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}