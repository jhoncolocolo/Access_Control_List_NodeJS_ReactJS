import RoleModel from "../Database/Models/Role.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllRoles = async (req,res) => {
    try {
        RoleModel.findAll().then(roles => res.json(roles));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getRole = async (req,res) => {
    try {
        RoleModel.findAll({where:{ id :req.params.id }}).then(roles => res.json(roles[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createRole = async (req,res) => {
    try {
        await RoleModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updateRole = async (req,res) => {
    try {
        await RoleModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deleteRole = async (req,res) => {
    try {
        await RoleModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}