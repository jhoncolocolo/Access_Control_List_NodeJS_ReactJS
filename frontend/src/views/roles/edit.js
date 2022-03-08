import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RoleModel from "../../Models/Roles"
const CompRoleEdit = () => {
        const [ name , setName ] = useState('')
        const [ role , setRole ] = useState('')
        const [ description , setDescription ] = useState('')
        const {id} = useParams()
        const navigate = useNavigate()   
        useEffect( ()=>{
            getRoleById()
        },[])

        const getRoleById = async () => {
            const res = await RoleModel.find('/roles',id)
            setName(res.data.name)
            setRole(res.data.role)
            setDescription(res.data.description)
        }

        //Procedure to Update
        const update = async (e) => {
            e.preventDefault()
            await RoleModel.updateData('/roles/',id, {
                name : name,
                role : role,
                description : description,
            })
            navigate('/roles')
        }   

    return (
        <div>
            <form  onSubmit={update}>
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
    
                    <button type='submit' className='btn btn-primary'>Edit</button>   
                </div>
            </form>
        </div>
    )
}

export default CompRoleEdit