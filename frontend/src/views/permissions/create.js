import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import  PermissionModel  from '../../Models/Permission'

const URI = 'http://localhost:4748/permissions/'
const CompPermissionCreate = () => {

    
        const [ name , setName ] = useState('')
        const [ route , setRoute ] = useState('')
        const [ description , setDescription ] = useState('')
        const navigate = useNavigate()    
        
    
    

        //Procedure Store
        const store = async (e) => {
            e.preventDefault()
            await PermissionModel.save('/permissions', {
                                 name : name,
                                 route : route,
                                 description : description,
                            })
            navigate('/permissions')
        }   

    return (
        <div>
           <h3>Create Permission</h3>
            <form  onSubmit={store}>
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
    
                    <button type='submit' className='btn btn-primary'>Store</button>   
                </div>
            </form>
        </div>
    )
}

export default CompPermissionCreate