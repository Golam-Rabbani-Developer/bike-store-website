import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebaseinit';
import "./Inventory.css"
import { toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';
import addRemoveData from '../../utilitis/addRemoveData';

const Inventory = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [products] = useProducts()
    const { name, company, price, picture } = product;
    const [newQuantity, setNewQuantity] = useState(0)
    const changedProduct = products.find(product => product._id === id)
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleUpdateBtn = (e) => {
        e.preventDefault()
        const email = user?.email;
        const number = e.target.numbers.value;
        const quantity = parseInt(changedProduct?.quantity) + parseInt(number);
        const data = {
            quantity
        }
        addRemoveData(data, id)
        console.log(data, number, quantity)
        changedProduct.quantity = quantity
        setNewQuantity(changedProduct.quantity)
        console.log(changedProduct.quantity)
        e.target.reset()
        toast(`You have addedd ${number} product`)
    }


    const handleDeliver = () => {
        const quantity = parseInt(changedProduct?.quantity) - 1;
        const data = {
            quantity
        }
        changedProduct.quantity = quantity
        addRemoveData(data, id)
        setNewQuantity(changedProduct.quantity)
        toast(`Your product is delivered now`)
    }
    return (
        <div className='inventory container mt-5 text-center'>
            <div className='inventory-product d-flex gap-3 flex-md-row flex-column justify-content-center align-items-center'>
                <img style={{ width: "400px" }} src={picture} alt="" />
                <div>
                    <div className='text-start'>
                        <h3 className='fw-bold'>{name}</h3>
                        <p className='fw-bold'>Price : {price}</p>
                        <p className='fw-bold '><span className='overview'>Product Overview</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus deleniti culpa.</p>
                        <p><strong className='fs-3 overview'>Quantity</strong> : <span className='text-danger fs-3'>
                            {newQuantity || product?.quantity}</span></p>
                        <p><strong className='overview'>Seller :</strong> {company}</p>
                        <button onClick={handleDeliver} className="btn-danger btn">Delivered</button>
                    </div>
                    <div className="inventory-form">
                        <h3 className='text-start'>Add More Item</h3>
                        <form onSubmit={handleUpdateBtn}>
                            <input className='ps-3' type="number" name="numbers" id="number" placeholder='Input Number' />
                            <button type='submit' className="btn btn-warning fw-bold rounded-0">
                                Add item
                            </button>
                        </form>
                    </div>
                    <Link to="/allinventory">
                        <button className="btn btn-danger  w-100">Manage All Inventory</button>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Inventory;