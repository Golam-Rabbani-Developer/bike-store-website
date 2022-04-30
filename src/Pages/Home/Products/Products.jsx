import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [products] = useProducts()
    return (
        <div className='products-container container'>
            <div className="products">
                {
                    products.map(product =>
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