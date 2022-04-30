import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, company, name, price, picture, quantity } = product;
    return (
        <div style={{ background: "#F6F6F6" }} className='product card p-4 border-0 '>
            <h4 className='text-muted'>{company}</h4>
            <img className='mx-auto' style={{ width: "200px" }} src={picture} alt="" />
            <div className='d-flex justify-content-between align-items-center'>
                <h5 className='fw-bold'>{name}</h5>
                <p className='fw-bold'>{price}</p>
            </div>
            <p className='text-start'><strong>Qunatity</strong> : {quantity}</p>
            <div>
                <Link to={`/inventory/${_id}`}>
                    <button className="btn btn-warning">Update</button>
                </Link>

            </div>
        </div>
    );
};

export default Product;