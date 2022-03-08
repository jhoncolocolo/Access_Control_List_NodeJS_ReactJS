import PermissionModel from "../Database/Models/Permission.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllPermissions = async (req,res) => {
    try {
        PermissionModel.findAll().then(permissions => res.json(permissions));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getPermission = async (req,res) => {
    try {
        PermissionModel.findAll({where:{ id :req.params.id }}).then(permissions => res.json(permissions[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createPermission = async (req,res) => {
    try {
        await PermissionModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updatePermission = async (req,res) => {
    try {
        await PermissionModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deletePermission = async (req,res) => {
    try {
        await PermissionModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}