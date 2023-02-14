import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebaseinit';
import useInventory from '../../hooks/useInventory';
import deleteData from '../../utilitis/deleteData';
import './CustomerInventory.css'
const CustomerInventory = () => {
    const [user] = useAuthState(auth)
    const [inventorys, setInventorys] = useInventory(user)
    const handleDeleteBtn = (id) => {
        const url = `https://plum-comfortable-meerkat.cyclic.app/addedCollection/${id}`
        deleteData(id, url, inventorys, setInventorys)
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