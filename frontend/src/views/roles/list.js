import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import RoleModel from "../../Models/Roles"

const CompRoleLists = () => {
    
    const [roles, setRole] = useState([])
    useEffect( ()=>{
        getRoles()
    },[])

    //Procedure for show all Roles
    const getRoles = async () => {
        try {
            const response = await RoleModel.all('/roles');
            setRole(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    //Procedure for delete Role 
    const deleteRole = async (id) => {
       await RoleModel.remove('/roles/',id)
       getRoles()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/roles/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>name</th>
                                <th>role</th>
                                <th>description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { roles.map ( ( role) => (
                                <tr key={ role.id }>
                                <td>{  role.name }</td>
                                <td>{  role.role }</td>
                                <td>{  role.description }</td>
                                    <td>
                                        <Link to={`/roles/edit/${ role.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteRole( role.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default CompRoleLists