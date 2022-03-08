import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from "../../commons/Auth";
import UserModel from "../../Models/Users"

const CompUserEdit = () => {

  const auth = useAuth()    
        const [ name , setName ] = useState('')
        const [ email , setEmail ] = useState('')
        const [ password , setPassword ] = useState('')
        const {id} = useParams()
        const navigate = useNavigate()    
    
        
        useEffect( ()=>{
            getUserById()
        },[])

    
        const getUserById = async () => {
            const res = await UserModel.find('/users',id)
            setName(res.data.name)
            setEmail(res.data.email)
            setPassword(res.data.password)
        }

        //Procedure to Update
        const update = async (e) => {
            e.preventDefault()
            await UserModel.updateData('/users/',id, {
                name : name,
                email : email,
                password : password
            }).then( (data) => {
                   navigate('/users')
            }).catch(function (error) {
                if (error.response) {
                    if(error.response.status== 401){
                        navigate('/unauthorized')
                    }
                }
            });
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
       
                      <label className="form-label">email</label>
                      <input type="text" className="form-control" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-4">
       
                      <label className="form-label">password</label>
                      <input type="text" className="form-control" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
                    </div>
    
                    <button type='submit' className='btn btn-primary'>Edit</button>   
                </div>
            </form>
        </div>
    )
}

export default CompUserEdit