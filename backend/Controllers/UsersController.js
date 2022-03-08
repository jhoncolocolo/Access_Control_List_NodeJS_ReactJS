import UserModel from "../Database/Models/User.js";

//** Methods For CRUD**//

//** Select All Registries**//
export const getAllUsers = async (req,res) => {
    try {
        UserModel.findAll().then(users => res.json(users));
            
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Show Registry*//
export const getUser = async (req,res) => {
    try {
        UserModel.findAll({where:{ id :req.params.id }}).then(users => res.json(users[0]));
            
    } catch (error) {
        res.json({message:error.message})
    }
}
//** Create Register**//
export const createUser = async (req,res) => {
    try {
        await UserModel.create(req.body)
        res.json({message:"Registry Was Create Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Update Register**//
export const updateUser = async (req,res) => {
    try {
        await UserModel.update(req.body,{
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Update Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}

//** Delete Register**//
export const deleteUser = async (req,res) => {
    try {
        await UserModel.destroy({
            where:{id:req.params.id}
        })
        res.json({message:"Registry Was Delete Successful!"})
    } catch (error) {
        res.json({message:error.message})
    }
}