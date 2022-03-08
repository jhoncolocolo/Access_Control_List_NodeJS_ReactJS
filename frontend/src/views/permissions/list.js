import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import  PermissionModel  from '../../Models/Permission'

const URI = 'http://localhost:4748/permissions/'


const CompPermissionLists = () => {
    
    const [permissions, setPermission] = useState([])
    useEffect( ()=>{
        getPermissions()
    },[])

    //Procedure for show all Permissions
    const getPermissions = async () => {
        const res = await PermissionModel.all('/permissions')
        setPermission(res.data);
    }

    //Procedure for delete Permission 
    const deletePermission = async (id) => {
       await PermissionModel.remove('/permissions/',id)
       getPermissions()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/permissions/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>name</th>
                                <th>route</th>
                                <th>description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { permissions.map ( ( permission) => (
                                <tr key={ permission.id }>
                                <td>{  permission.name }</td>
                                <td>{  permission.route }</td>
                                <td>{  permission.description }</td>
                                    <td>
                                        <Link to={`/permissions/edit/${ permission.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deletePermission( permission.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default CompPermissionLists