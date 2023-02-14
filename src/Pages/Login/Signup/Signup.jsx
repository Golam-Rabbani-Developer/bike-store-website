import React from 'react';
import { FaUser, FaUserLock } from "react-icons/fa"
import { MdAlternateEmail } from 'react-icons/md'
import img from "../../../images/logo/header-logo (1).png"
import { FcGoogle } from "react-icons/fc"
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebaseinit';
import { toast } from 'react-toastify';
const Signup = () => {
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        navigate('/home')
    }

    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
            .then(res => {
                navigate(from, { replace: true });
            })
        e.target.reset()

    }
    const handleGoogle = () => {
        signInWithGoogle()
            .then(res => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='login-form  p-5 rounded-3'>
            <img style={{ width: "100px" }} src={img} alt="" />
            <h5 className='mt-3 fw-bold'>Registration</h5>
            <hr className='mb-5 ' />
            <form onSubmit={handleSubmit}>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="text" name="name" id="name" placeholder='Username' />
                    <p className='user'><FaUser></FaUser></p>
                </div>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="email" name="email" id="email" placeholder='User Email' />
                    <p className='user'><MdAlternateEmail /></p>
                </div>
                <div className='input-box mb-4'>
                    <input className='form-control text-center' type="password" name="password" id="password" required placeholder='User Password' />
                    <p className='user-pass'><FaUserLock /></p>
                </div>

                <input className='w-100 btn-warning btn fw-bold' type="submit" value="Login" />
            </form>
            <p className='mt-4'>Or</p>
            <hr className='mt-2' />
            <button onClick={handleGoogle} className="google bg-warning px-5 py-2 border-0 ">
                <FcGoogle className='mb-1 me-2' /> Google
            </button>
            <p className='mt-3'>Already have an account ? <Link to='/login' className='text-warning fw-bold text-decoration-none'>Please log In</Link></p>
        </div>
    );
};

export default Signup;