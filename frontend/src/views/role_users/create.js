import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RoleUserModel from "../../Models/RoleUser"
import UserModel from "../../Models/Users"
import RoleModel from "../../Models/Roles"

const CompRoleUserCreate = () => {

        const [ roles, setRoleData] = useState([])
        const [ users, setUserData] = useState([])
    
        const [ role_id , setRoleId ] = useState('')
        const [ user_id , setUserId ] = useState('')
        const [ role_error , setRoleError ] = useState('')
        const [ user_error , setUserError] = useState('')
        const navigate = useNavigate()    
        
        useEffect( ()=>{
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

      const validate = () => {
        setRoleError('');
        setUserError('');

        if (role_id== '') {
          setRoleError("Role Not Can Be Null");
           console.log(role_error);
        }

        if (user_id== '') {
          setUserError("User Not Can Be Null");
        }

        /*if (!this.state.email.includes("@")) {
          emailError = "invalid email";
        }*/

        if (role_id=='' || user_id=='') {
          return false;
        }
        return true;
      };
    

        //Procedure Store
        const store = async (e) => {
            e.preventDefault()
            const isValid = validate()
            if (isValid) {
                await RoleUserModel.save('/role_users', {
                    role_id : role_id,
                    user_id : user_id,
                })
                navigate('/role_users')
            }
        }   

    return (
        <div>
           <h3>Create RoleUser</h3>
            <form  onSubmit={store}>
                <div>
                    <div className="mb-4">
                          <label className="form-label">Role</label>
                          <select className="form-control"  value={role_id} onChange={ (e)=> setRoleId(e.target.value)}>
                              <option value="">Selected Role</option>
                              {roles.map ( ( role ) => (
                                <option key={ role.id } value={role.id}>{role.name}</option>
                               )) }
                          </select>
       
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {role_error}
                    </div>
                    <div className="mb-4">
                          <label className="form-label">User</label>
                          <select className="form-control"  value={user_id} onChange={ (e)=> setUserId(e.target.value)}>
                              <option value="">Selected User</option>
                              {users.map ( ( user ) => (
                                <option key={ user.id } value={user.id}>{user.name}</option>
                               )) }
                          </select>
       
                    </div>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {user_error}
                    </div>
    
                    <button type='submit' className='btn btn-primary'>Store</button>   
                </div>
            </form>
        </div>
    )
}

export default CompRoleUserCreate