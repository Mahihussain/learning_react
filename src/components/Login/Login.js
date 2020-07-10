import React, { useState } from "react";
import LoginWave from "../../wave.png";
import Avatar from "../../profile_pic.svg";
import ImageMobile from "../../mobile.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
	const [focus, setFocus] = useState(false);
	const [blur, setBlur] = useState(false);


    return(<>
    <img className="login-wave" src={LoginWave}/>
        <div className="login-container">
		<div className="login-img">
			<img src={ImageMobile}/>
		</div>
		<div className="login-content">
			<form className="login-form">
				<img src={Avatar}/>
				<h2 className="login-title">Welcome</h2>
           		<div className={`login-input-div ${focus ? "focus": ""}`}>
           		   <div className="i">
					  <FontAwesomeIcon icon={faUser} />
           		   </div>
           		   <div className="login-div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="login-input" onFocus={()=> setFocus(true)} onBlur={()=> setFocus(false)}/>
           		   </div>
           		</div>
           		<div className={`login-input-div ${blur ? "focus": ""}`}>
           		   <div className="i"> 
					  <FontAwesomeIcon icon={faUnlockAlt} />
           		   </div>
           		   <div className="login-div">
           		    	<h5>Password</h5>
           		    	<input type="blur" className="login-input" onFocus={()=> setBlur(true)} onBlur={()=> setBlur(false)}/>
            	   </div>
            	</div>
            	<a href="#" className="anchor">Forgot Password?</a>
            	<input type="submit" className="login-btn" value="Login"/>
            </form>
        </div>
    </div>
    </>);
};

export default Login;