import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import RoleUserModel from "../../Models/RoleUser"

const CompRoleUserLists = () => {
    
    const [role_users, setRoleUser] = useState([])
    useEffect( ()=>{
        getRoleUsers()
    },[])

    //Procedure for show all RoleUsers
    const getRoleUsers = async () => {
        try {
            const response = await RoleUserModel.all('/role_users');
            setRoleUser(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    //Procedure for delete RoleUser 
    const deleteRoleUser = async (id) => {
       await RoleUserModel.remove('/role_users/',id)
       getRoleUsers()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/role_users/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Role</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { role_users.map ( ( role_user) => (
                                <tr key={ role_user.id }>
                                <td>{  role_user.role.name }</td>
                                <td>{  role_user.user.name }</td>
                                    <td>
                                        <Link to={`/role_users/edit/${ role_user.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteRoleUser( role_user.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default CompRoleUserLists