import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const SignUp = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')    
    const [confirmPassword,setconfirmPassword]=useState('')
    const [error,setError]=useState('')
    const navigate =useNavigate()

    const handleEmailBlur=(event)=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur=(event)=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur=(event)=>{
        setconfirmPassword(event.target.value)
    }
    

    const [createUserWithEmailAndPassword ,user]=useCreateUserWithEmailAndPassword(auth)

    if(user){
        navigate('/shop')
    }

    const handleCreateUser=(event)=>{
        event.preventDefault()
        if(password!==confirmPassword){
            setError('Your passwords did not match')
            return
        }
        if(password.length>6){
            setError('password should contain 6 char')
            return
        }
        createUserWithEmailAndPassword(email,password)
    }







    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                        <p style={{color:'red'}}>{error}</p>
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account ?<Link className='form-link' to='/login' > LogIn</Link>
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

export default SignUp;