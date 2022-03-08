import { useNavigate } from 'react-router-dom'
import { useAuth } from "../commons/Auth";

const UnauthorizedComponent = () => {
  const auth = useAuth()    
  const navigate = useNavigate()  
  const Back = () => {
      navigate(auth.route.from);
  }

  return  (
    <div> 
      <h1>You Are Not Authorized</h1>
      <div> <button onClick={ ()=>Back( ) } className='btn btn-primary'> Back </button> </div>
    </div>
    
    )
};

export default UnauthorizedComponent;