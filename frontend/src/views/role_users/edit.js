import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RoleUserModel from "../../Models/RoleUser"
import UserModel from "../../Models/Users"
import RoleModel from "../../Models/Roles"

const CompRoleUserEdit = () => {

        const [ roles, setRoleData] = useState([])
        const [ users, setUserData] = useState([])
    
        const [ role_id , setRoleId ] = useState('')
        const [ user_id , setUserId ] = useState('')
        const {id} = useParams()
        const navigate = useNavigate()    
    
        
        useEffect( ()=>{
            getRoleUserById()
            getRoles()
            getUsers()
        },[])

        //Procedure To  Show All Roles
        const getRoles = async () => {
            const response = await RoleModel.all('/roles');
            setRoleData(response.data)
        }
        //Procedure To  Show All Users
        const getUsers = async () => {
            const response = await UserModel.all('/users');
            setUserData(response.data)
        }

        const getRoleUserById = async () => {
            const res = await RoleUserModel.find('/role_users',id)
            setRoleId(res.data.role_id)
            setUserId(res.data.user_id)
        }

        //Procedure to Update
        const update = async (e) => {
            e.preventDefault()
            await RoleUserModel.updateData('/role_users/',id, {
                role_id : role_id,
                user_id : user_id,
            })
            navigate('/role_users')
        }   

    return (
        <div>
            <form  onSubmit={update}>
                <div>
                                <div className="mb-4">
                          <label className="form-label">Role</label>
                          <select className="form-control"  value={role_id} onChange={ (e)=> setRoleId(e.target.value)}>
                              {roles.map ( ( role ) => (
                                <option key={ role.id } value={role.id}>{role.name}</option>
                               )) }
                          </select>
       
                    </div>
                    <div className="mb-4">
                          <label className="form-label">User</label>
                          <select className="form-control"  value={user_id} onChange={ (e)=> setUserId(e.target.value)}>
                              {users.map ( ( user ) => (
                                <option key={ user.id } value={user.id}>{user.name}</option>
                               )) }
                          </select>
       
                    </div>
    
                    <button type='submit' className='btn btn-primary'>Edit</button>   
                </div>
            </form>
        </div>
    )
}

export default CompRoleUserEdit