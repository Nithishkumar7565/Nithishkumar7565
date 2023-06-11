import { useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link, useNavigate } from "react-router-dom";


import axios from "axios";
import "./Login.css";
const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: ""
  })
  const { username, password } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  
    
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/user/login", user);
    if (result.data === "Login success")
      navigate("/Homemain");
    else
      setMsg(result.data);
  };

  return (

    <div className="login_container">
    <img style={{width:"55.5cm",height:"200vh",position:"absolute"}} src="https://i.pinimg.com/originals/9d/a8/e9/9da8e997452025ced686008bf6bbc58a.jpg" alt=""/>
      <div className="login_page"></div>
      <div>
      <br></br>

        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          
          
          
          <p className="title">LOGIN</p>
         
          <div className="message">{msg}</div>
          <span>
          
          </span>
          <label className="input_title">Username</label>
         
            
          <div className="usrinput">
            <span>
            </span>
           
            <input type="text" className="username" name="username" value={username} onChange={(e) => onInputChange(e)} required></input>
            </div>
          <label className="input_title">Password</label>
        
            <br></br>
          <div className="pwdinput">
            <span>
            </span>
            <input className="password"type="password" name="password" value={password} onChange={(e) => onInputChange(e)} required>
                
            </input>
          </div>
          <br></br>
          <div className="lgn-btn">
            <button type="submit" className="login_btn">
              Login
            </button>
          </div>
          <br></br>
          <div className="signLogin">
            <span className="sign_up">Don't have an account? </span>
            <span>
              <Link to="/adduser" className="addlink">
                Sign Up
              </Link>
            </span>
            
          </div>
        </form>
      
      </div>
      </div>

  );
};

export default Login;