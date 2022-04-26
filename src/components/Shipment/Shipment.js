import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user]=useAuthState(auth)

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('') 
    const [address,setAddress]=useState('') 

    const handleNameBlur=(event)=>{
        setName(event.target.value)
    }
    
    
    
    const handleAddressBlur=(event)=>{
        setAddress(event.target.value)
    }
    
    const handlePhoneBlur=(event)=>{
        setPhone(event.target.value)
    }
    const handleCreateUser=(event)=>{
        event.preventDefault()
        
    }
    

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Shipping Form</h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="email" name="name" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email"  id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                        {/* <p style={{color:'red'}}>{error}</p> */}
                    </div>
                    <input className='form-submit' type="submit" value="Add shipping" />
                </form>
                {/* <p>
                    Already have an account ?<Link className='form-link' to='/login' > LogIn</Link>
                </p> */}
                
            </div>
        </div>
    );
};

export default Shipment;