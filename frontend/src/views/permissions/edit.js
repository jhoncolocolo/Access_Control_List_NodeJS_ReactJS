import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  PermissionModel  from '../../Models/Permission'
const URI = 'http://localhost:4748/permissions/'
const CompPermissionEdit = () => {

    
        const [ name , setName ] = useState('')
        const [ route , setRoute ] = useState('')
        const [ description , setDescription ] = useState('')
        const {id} = useParams()
        const navigate = useNavigate()    
    
        
        useEffect( ()=>{
            getPermissionById()
        },[])

    
        const getPermissionById = async () => {
            const res = await axios.get(URI+id)
            setName(res.data.name)
            setRoute(res.data.route)
            setDescription(res.data.description)
        }

        //Procedure to Update
        const update = async (e) => {
            e.preventDefault()
            await PermissionModel.updateData('/permissions/',id, {
                    name : name,
                    route : route,
                    description : description,
            })

            navigate('/permissions')
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
       
                      <label className="form-label">route</label>
                      <input type="text" className="form-control" value={route} onChange={ (e)=> setRoute(e.target.value)}/>
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

export default CompPermissionEdit