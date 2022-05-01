import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products] = useProducts()
    const slicedProduct = products.slice(0, 6)
    return (
        <div className='products-container container'>
            <div className='d-flex justify-content-center align-items-center flex-column '>
                <h2 className='heading text-center mb-3'><span className='sub-heading-title'>Bikers </span> Store</h2>
                <p className='fs-4 fw-bold text-muted'>Business means Commitment</p>

            </div>
            <div className="products mt-5">
                {
                    slicedProduct.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Products;