import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import './CustomerInventory.css'
const CustomerInventory = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const [inventorys, setInventorys] = useState([])
    useEffect(() => {
        const getInventory = async () => {
            const email = user?.email;

            console.log(email)
            const url = `http://localhost:5000/addedCollection?email=${email}`
            try {
                fetch(url, {
                    headers: {
                        authorization: `Bearer ${JSON.parse(localStorage.getItem("accessToken"))}`
                    }
                })
                    .then(res => res.json())
                    .then(data => setInventorys(data))
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate("/home")
                }
                console.log(error)
            }
        }
        getInventory()
    }, [user])
    const handleDeleteBtn = (id) => {
        const url = `https://bikes-server-side.herokuapp.com/addedCollection/${id}`
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = inventorys.filter(inventory => inventory._id !== id)
                    setInventorys(remaining)
                }
            })

    }
    return (
        <div className='customerinventory container mx-auto'>
            <h1 className='mb-5'>Your Inventory Item {inventorys?.length}</h1>
            {
                inventorys.map(inventory =>
                    <div key={inventory._id} className=' card mb-4'>
                        <div className='d-flex'>
                            <img style={{ width: "300px" }} src={inventory?.picture} alt="" />
                            <div className='text-start d-flex flex-column justify-content-between align-items-start p-4'>
                                <div className=''>
                                    <h3><strong className='overview'>Inventory Name : </strong>{inventory?.name}</h3>
                                    <h3><strong className='overview'>Quantity : </strong>{inventory?.quantity}</h3>
                                </div>
                                <button onClick={() => handleDeleteBtn(inventory._id)} className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CustomerInventory;