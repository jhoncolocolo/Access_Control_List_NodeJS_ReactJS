import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:4748/permission_roles/'
const URIPermissions = 'http://localhost:4748/permissions/'
const URIRoles = 'http://localhost:4748/roles/'
const CompPermissionRoleCreate = () => {

        const [ permissions, setPermissionData] = useState([])
        const [ roles, setRoleData] = useState([])
    
        const [ permission_id , setPermissionId ] = useState('')
        const [ role_id , setRoleId ] = useState('')
        const navigate = useNavigate()    
        
        useEffect( ()=>{
            getPermissions()
            getRoles()
        },[])
 
        //Procedure To  Show All Permissions
        const getPermissions = async () => {
            const res = await axios.get(URIPermissions)
            setPermissionData(res.data)
        }
        //Procedure To  Show All Roles
        const getRoles = async () => {
            const res = await axios.get(URIRoles)
            setRoleData(res.data)
        }
    

        //Procedure Store
        const store = async (e) => {
            e.preventDefault()
            await axios.post(URI, {
                                 permission_id : permission_id,
                                 role_id : role_id,
                            })
            navigate('/permission_roles')
        }   

    return (
        <div>
           <h3>Create PermissionRole</h3>
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
                          <label className="form-label">Role</label>
                          <select className="form-control"  value={role_id} onChange={ (e)=> setRoleId(e.target.value)}>
                              {roles.map ( ( role ) => (
                                <option key={ role.id } value={role.id}>{role.name}</option>
                               )) }
                          </select>
       
                    </div>
    
                    <button type='submit' className='btn btn-primary'>Store</button>   
                </div>
            </form>
        </div>
    )
}

export default CompPermissionRoleCreate