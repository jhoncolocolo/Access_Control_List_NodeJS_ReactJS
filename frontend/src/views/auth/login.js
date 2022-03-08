import axios from "axios";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { useAuth } from "../../commons/Auth";
import { useNavigate,useLocation } from "react-router-dom";

const CompLogin = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'

  const refreshToken = async () => {
    try {
      const res = await axios.post("http://localhost:4748/api/refresh", { token: user.refreshToken });
      setUser({
        ...user,
        accessToken: res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const axiosJWT = axios.create()

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await refreshToken();
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4748/api/login", { username, password });
      auth.login(res.data);
      localStorage.setItem('user', JSON.stringify(res.data))
      navigate(redirectPath,{replace:true})
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="container">
        <div className="login">
          <form onSubmit={handleSubmit}>
            <span className="formTitle">Lama Login</span>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="submitButton">
              Login
            </button>
          </form>
        </div>
    </div>
  );
}

export default CompLogin;