import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../commons/Auth";
import UserModel from "../../Models/Users"

const CompUserCreate = () => {

        const auth = useAuth()    
        const [ name , setName ] = useState('')
        const [ email , setEmail ] = useState('')
        const [ password , setPassword ] = useState('')
        const [ name_error , setNameError ] = useState('')
        const [ email_error , setEmailError] = useState('')
        const [ password_error , setPasswordError] = useState('')
        const navigate = useNavigate()    
        
        const validate = () => {
          setNameError('');
          setEmailError('');
          setPassword('');

          if (name== '') {
            setNameError("Name Can't Be Null");
             console.log(name_error);
          }

          if (password== '') {
            setPasswordError("Password Can't Be Null");
          }

          if (email == '' || !email.includes("@")) {
             setEmailError("Invalid email");
          }

          if (name=='' || password=='' || email == '' || !email.includes("@") ) {
            return false;
          }
          return true;
      };
    

        //Procedure Store
        const store = (e) => {
            e.preventDefault()
            const isValid = validate()
            if (isValid) {
                UserModel.save('/users', {
                    name : name,
                    email : email,
                    password : password
                })
                .then( (data) => {
                   navigate('/users')
                })
                .catch(function (error) {
                    if (error.response) {
                       if(error.response.status== 401){
                         navigate('/unauthorized')
                       }
                    }
                });
            }
        }   

    return (
        <div style={{margin: '5% 25%', border: '1px solid'}}>
           <h3>Create User</h3>
            <form className="row g-3" onSubmit={store}>
              <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={ (e)=> setName(e.target.value)}/>
                <div style={{ fontSize: 12, color: "red" }}>
                  {name_error}
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                 <input type="text" className="form-control" value={email} onChange={ (e)=> setEmail(e.target.value)}/>
                 <div style={{ fontSize: 12, color: "red" }}>
                  {email_error}
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" value={password} onChange={ (e)=> setPassword(e.target.value)}/>
                <div style={{ fontSize: 12, color: "red" }}>
                  {password_error}
                </div>
              </div>
              <div className="col-12">
                <button type='submit' className='btn btn-primary'>Store</button>
              </div>
            </form>
        </div>
    )
}

export default CompUserCreate