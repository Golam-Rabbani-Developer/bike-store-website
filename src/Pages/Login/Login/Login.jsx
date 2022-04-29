import React, { useState } from 'react';
import { FaUserLock } from "react-icons/fa"
import { MdAlternateEmail } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc"
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import img from "../../../images/logo/header-logo (1).png"
import './Login.css'
import auth from '../../../firebaseinit';
import { toast } from 'react-toastify';
const Login = () => {
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signInWithEmailAndPassword(email, pass)
        e.target.reset()
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }
    return (
        <div className='login-form p-5 rounded-3'>
            <img style={{ width: "100px" }} src={img} alt="" />
            <h5 className='mt-3 fw-bold'>Log in</h5>
            <hr className='mb-5 ' />
            <form onSubmit={handleSubmit}>
                <div className='input-box mb-4'>
                    <input onBlur={(e) => setEmail(e.target.value)} className='form-control text-center' type="email" name="email" id="email" placeholder='User Email' />
                    <p className='user'><MdAlternateEmail /></p>
                </div>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="password" name="password" id="password" required placeholder='User Password' />
                    <p className='user-pass'><FaUserLock /></p>
                    <p onClick={async () => {
                        email && await sendPasswordResetEmail(email)
                            .then(res => {
                                toast("Check mail to reset pass")
                            })

                    }} className='text-end reset-pass'><small>Forget Password ?</small></p>
                </div>

                <input className='w-100 btn-danger btn fw-bold' type="submit" value="Login" />

            </form>
            <p className='mt-4'>Or</p>
            <hr className='mt-2' />
            <button onClick={handleGoogle} className="google bg-danger px-5 py-2 border-0  text-white">
                <FcGoogle className='mb-1 me-2' /> Google
            </button>
            <p className='mt-3'>Don't have an account ? <Link to='/signup' className='text-danger fw-bold text-decoration-none'>Create Now</Link></p>
        </div>
    );
};

export default Login;