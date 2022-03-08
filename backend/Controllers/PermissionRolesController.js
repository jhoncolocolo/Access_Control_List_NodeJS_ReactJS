import PermissionRoleModel from "../Database/Models/PermissionRole.js";
import PermissionModel from "../Database/Models/Permission.js";
import RoleModel from "../Database/Models/Role.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllPermissionRoles = async (req,res) => {
    try {
        PermissionRoleModel.findAll({
            include: [
                {
                    model : PermissionModel ,
                    as : 'permission' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : RoleModel ,
                    as : 'role' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(permission_roles => res.json(permission_roles));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getPermissionRole = async (req,res) => {
    try {
        PermissionRoleModel.findAll({
            where:{ id :req.params.id },
            include: [
                {
                    model : PermissionModel ,
                    as : 'permission' ,
                    attributes : ['id','name'] ,
                },
                {
                    model : RoleModel ,
                    as : 'role' ,
                    attributes : ['id','name'] ,
                },
            ]
        }).then(permission_roles => res.json(permission_roles[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createPermissionRole = async (req,res) => {
    try {
        await PermissionRoleModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updatePermissionRole = async (req,res) => {
    try {
        await PermissionRoleModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deletePermissionRole = async (req,res) => {
    try {
        await PermissionRoleModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}