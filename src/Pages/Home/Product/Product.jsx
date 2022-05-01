import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { _id, company, name, price, picture, quantity } = product;
    return (
        <div data-aos="fade-up" style={{ background: "#F6F6F6" }} className='product card p-4 border-0 '>
            <h4 className='text-muted'>Seller  : {company}</h4>
            <hr />
            <div style={{ height: "260px" }} className='product-img' >
                <img className='mx-auto' style={{ width: "200px" }} src={picture} alt="" />
            </div>
            <hr />
            <div className='product-text d-flex justify-content-around '>
                <div className='text-center'>

                    <h5 className='fw-bold'>{name}</h5>
                    <p className='text-start'><strong>Qunatity</strong> : <span className='text-danger'>{quantity}</span></p>
                </div>
                <p className='fw-bold'>{price}</p>


            </div>
            <Link className='text-start ' to={`/inventory/${_id}`}>
                <button className="btn btn-warning w-100">Update</button>
            </Link>

        </div>
    );
};

export default Product;