import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product/Product';
import { BiSearchAlt2 } from 'react-icons/bi'
import './Stores.css'
const Stores = () => {
    const [pageCount, setPageCount] = useState(0)
    const [products, setProducts, page, setPage,] = useProducts()
    useEffect(() => {
        fetch(`http://localhost:5000/bikecount`)
            .then(res => res.json())
            .then(data => {
                const number = Math.ceil(parseInt(data.count) / 6)
                setPageCount(number)
            })
    }, [])
    return (
        <div className=' stores-container container mx-auto'>
            <div className="stores ">
                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    )
                }
            </div>
            <div className="pagination d-flex justify-content-center align-items-center mt-5">
                {
                    [...Array(pageCount).keys()].map((number, index) =>
                        <button
                            className={` global-btn px-3 py-1 fw-bold mx-1 ${page === number ? "selected" : ''}`}
                            onClick={() => setPage(number)}
                            key={index}>

                            {number}</button>
                    )
                }
            </div>
        </div>
    );
};

export default Stores;