import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from "../../commons/Auth";
import UserModel from "../../Models/Users"
import { useNavigate } from 'react-router-dom'

const CompUserLists = () => {
    const auth = useAuth()    
    const [users, setUser] = useState([])
    const navigate = useNavigate()   
    useEffect( ()=>{
        getUsers()
    },[])

    //Procedure for show all Users
    const getUsers = () => {
        UserModel.all('/users').then( (data) => {
            setUser(data.data);
        }).catch(function (error) {
            if (error.response) {
                if(error.response.status== 401){
                    navigate('/unauthorized')
                }
            }
        });
    }

    //Procedure for delete User 
    const deleteUser = async (id) => {
       await UserModel.remove('/users/',id)
       getUsers()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/users/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( ( user) => (
                                <tr key={ user.id }>
                                <td>{  user.name }</td>
                                <td>{  user.email }</td>
                                    <td>
                                        <Link to={`/users/edit/${ user.id }`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteUser( user.id ) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
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

export default CompUserLists