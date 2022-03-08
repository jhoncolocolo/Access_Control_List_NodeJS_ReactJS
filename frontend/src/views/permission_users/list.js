import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:4747/permission_users/'


const CompPermissionUserLists = () => {
    
    const [permission_users, setPermissionUser] = useState([])
    useEffect( ()=>{
        getPermissionUsers()
    },[])

    //Procedure for show all PermissionUsers
    const getPermissionUsers = async () => {
        const res = await axios.get(URI)
        setPermissionUser(res.data)
    }

    //Procedure for delete PermissionUser 
    const deletePermissionUser = async (id) => {
       await axios.delete(`${URI}${id}`)
       getPermissionUsers()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/permission_users/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Permission</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { permission_users.map ( ( permission_user) => (
                                <tr key={ permission_user.id }>
                                <td>{  permission_user.permission.name }</td>
                                <td>{  permission_user.user.name }</td>
                                    <td>
                                        <Link to={`/permission_users/edit/${ permission_user.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deletePermissionUser( permission_user.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default CompPermissionUserLists