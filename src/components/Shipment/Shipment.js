import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase_init';
import './Shipping.css'
const Shipment = () => {
    // states
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    

    // event-handlers
    const nameHandler = event =>{
        setName(event.target.value)
    }
    const emailHandler = event =>{
        setEmail(event.target.value)
    }
    const addressHandler = event =>{
        setPhone(event.target.value)
    }
    const phoneHandler = event =>{
        setAddress(event.target.value)
    }
    

    const handleCreateUser = event=>{
        event.preventDefault()
        

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input onBlur={nameHandler} type="text" name="name" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input value={user?.email} readOnly type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input onBlur={addressHandler} type="text" name="address" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="confirm-password">Phone</label>
                    <input onBlur={phoneHandler} type="text" name="phone" id="" required />
                </div>
                <p style={{color: 'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;