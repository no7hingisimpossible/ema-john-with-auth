import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase_init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const EmailHandler = e =>{
        setEmail(e.target.value)
    }
    const PassHandler = e =>{
        setPassword(e.target.value)
    }
    const handleLogin = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    const location = useLocation()
    const from = location.state.from.pathname || '/shop'
    const navigate = useNavigate()
    if(user){
        navigate(from, {replace:true})
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input onBlur={EmailHandler} type="email" name="email" id="" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input onBlur={PassHandler} type="password" name="password" id="" required />
                </div>
                <p style={{color: 'red'}}>{error?.message.includes('auth/wrong-password') && 'Wrong Password'}</p>
                {
                    loading && <p>Loading....</p>
                }
                <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New To Ema-John? <Link className='form-link' to="/signup">Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;