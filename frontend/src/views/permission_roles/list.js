import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:4748/permission_roles/'


const CompPermissionRoleLists = () => {
    
    const [permission_roles, setPermissionRole] = useState([])
    useEffect( ()=>{
        getPermissionRoles()
    },[])

    //Procedure for show all PermissionRoles
    const getPermissionRoles = async () => {
        const res = await axios.get(URI)
        setPermissionRole(res.data)
    }

    //Procedure for delete PermissionRole 
    const deletePermissionRole = async (id) => {
       await axios.delete(`${URI}${id}`)
       getPermissionRoles()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/permission_roles/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Permission</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { permission_roles.map ( ( permission_role) => (
                                <tr key={ permission_role.id }>
                                <td>{  permission_role.permission.name }</td>
                                <td>{  permission_role.role.name }</td>
                                    <td>
                                        <Link to={`/permission_roles/edit/${ permission_role.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deletePermissionRole( permission_role.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompPermissionRoleLists