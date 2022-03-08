import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4748/permission_users/'
const URIPermissions = 'http://localhost:4748/permissions/'
const URIUsers = 'http://localhost:4748/users/'
const CompPermissionUserCreate = () => {

        const [ permissions, setPermissionData] = useState([])
        const [ users, setUserData] = useState([])
    
        const [ permission_id , setPermissionId ] = useState('')
        const [ user_id , setUserId ] = useState('')
        const navigate = useNavigate()    
        
        useEffect( ()=>{
            getPermissions()
            getUsers()
        },[])
 
        //Procedure To  Show All Permissions
        const getPermissions = async () => {
            const res = await axios.get(URIPermissions)
            setPermissionData(res.data)
        }
        //Procedure To  Show All Users
        const getUsers = async () => {
            const res = await axios.get(URIUsers)
            setUserData(res.data)
        }
    

        //Procedure Store
        const store = async (e) => {
            e.preventDefault()
            await axios.post(URI, {
                                 permission_id : permission_id,
                                 user_id : user_id,
                            })
            navigate('/permission_users')
        }   

    return (
        <div>
           <h3>Create PermissionUser</h3>
            <form  onSubmit={store}>
                <div>
                    <div className="mb-4">
                          <label className="form-label">Permission</label>
                          <select className="form-control"  value={permission_id} onChange={ (e)=> setPermissionId(e.target.value)}>
                              {permissions.map ( ( permission ) => (
                                <option key={ permission.id } value={permission.id}>{permission.name}</option>
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
    
                    <button type='submit' className='btn btn-primary'>Store</button>   
                </div>
            </form>
        </div>
    )
}

export default CompPermissionUserCreate