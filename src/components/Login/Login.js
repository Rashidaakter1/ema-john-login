import React, { useState } from 'react';
import {  useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    const location = useLocation();
    const navigate =useNavigate()


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    const handleEmailBlur=(event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur=(event)=>{
        setPassword(event.target.value)
    }
    const handleLogIn=(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
        
    }
    let from = location.state?.from?.pathname || "/";


    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>LogIn</h1>
                <form onSubmit={handleLogIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                    <p>{error?.message}</p>
                    {
                        loading && <p> Loading .....</p>
                
                    }
                </form>
                <p>
                    New to Ema-John?<Link className='form-link' to='/signup' > Create an account</Link>
                </p>
                <div className='line'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <button className='btn'>
                    <img style={{width:"25px" ,height:"25px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png" alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;