import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebaseinit';
import img from "../../../src/images/logo/header-logo (1).png"
import { toast } from 'react-toastify';
const Addinventory = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const quantity = e.target.numbers.value;
        const photourl = e.target.photo.value;
        const data = {
            name: name,
            email: email,
            quantity: quantity,
            photourl: photourl,
        }
        const url = `http://localhost:5000/bikes`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        }, { email })
        toast("Your Collection added successfully")
        e.target.reset()
    }
    return (
        <div className="addform-section">

            <div style={{ width: "440px" }} className={`addform border border-secondary rounded-3 mt-5 p-5 mx-auto`}>
                <img style={{ width: "100px" }} src={img} alt="" />
                <h5 className='mt-3'>Add Now</h5>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input style={{ height: "35px" }} className='w-100' type="text" name="name" id="name" placeholder='Collection name' required />
                    <input style={{ height: "35px" }} className='w-100' type="number" name="numbers" id="number" placeholder='Quantity' />
                    <input style={{ height: "35px" }} className='w-100' type="text" name="photo" id="photo" placeholder='Photo Url' required />
                    <input style={{ height: "35px" }} className='w-100' type="email" name="email" id="email" value={user?.email} readOnly />
                    <input style={{ height: "35px" }} className='w-100 btn btn-success' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default Addinventory;