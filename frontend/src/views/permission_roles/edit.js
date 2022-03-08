import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:4748/permission_roles/'
const URIPermissions = 'http://localhost:4748/permissions/'
const URIRoles = 'http://localhost:4748/roles/'
const CompPermissionRoleEdit = () => {

        const [ permissions, setPermissionData] = useState([])
        const [ roles, setRoleData] = useState([])
    
        const [ permission_id , setPermissionId ] = useState('')
        const [ role_id , setRoleId ] = useState('')
        const {id} = useParams()
        const navigate = useNavigate()    
    
        
        useEffect( ()=>{
            getPermissionRoleById()
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
    
        const getPermissionRoleById = async () => {
            const res = await axios.get(URI+id)
            setPermissionId(res.data.permission_id)
            setRoleId(res.data.role_id)
        }

        //Procedure to Update
        const update = async (e) => {
            e.preventDefault()
            await axios.put(URI+id, {
                    permission_id : permission_id,
                    role_id : role_id,
                })
            navigate('/permission_roles')
        }   

    return (
        <div>
            <form  onSubmit={update}>
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
    
                    <button type='submit' className='btn btn-primary'>Edit</button>   
                </div>
            </form>
        </div>
    )
}

export default CompPermissionRoleEdit