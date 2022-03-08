import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RoleModel from "../../Models/Roles"

const CompRoleCreate = () => {
        const [ name , setName ] = useState('')
        const [ role , setRole ] = useState('')
        const [ description , setDescription ] = useState('')
        const navigate = useNavigate()    

        //Procedure Store
        const store = async (e) => {
            e.preventDefault()
            await RoleModel.save('/roles', {
                name : name,
                role : role,
                description : description,
            })
            navigate('/roles')
        }   
    return (
        <div>
           <h3>Create Role</h3>
            <form  onSubmit={store}>
                <div>
                    <div className="mb-4">
       
                      <label className="form-label">name</label>
                      <input type="text" className="form-control" value={name} onChange={ (e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-4">
       
                      <label className="form-label">role</label>
                      <input type="text" className="form-control" value={role} onChange={ (e)=> setRole(e.target.value)}/>
                    </div>
                    <div className="mb-4">
       
                      <label className="form-label">description</label>
                      <input type="text" className="form-control" value={description} onChange={ (e)=> setDescription(e.target.value)}/>
                    </div>
    
                    <button type='submit' className='btn btn-primary'>Store</button>   
                </div>
            </form>
        </div>
    )
}

export default CompRoleCreate