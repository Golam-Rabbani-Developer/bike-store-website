import React from 'react';
import { Link } from 'react-router-dom';
import './SinlgeBlog.css'
import { FcRight } from "react-icons/fc"
const SingleBlog = ({ blog, index }) => {
    const { heading, text, img } = blog;
    return (
        <div className='p-3 text-md-start text-center singleblog'>
            <img className={`rounded-3 ${index === 1 ? "middle-pic" : ""}`} src={img} alt="" />
            <h4 className='mt-4'>{heading}</h4>
            <p className='text-muted text-md-start text-center'>{text}</p>
            <div className='text-center'>
                <Link className='text-decoration-none ' style={{ color: "var(--primary-color)" }} to="/home">
                    See More <FcRight />
                </Link>
            </div>
        </div>

    );
};

export default SingleBlog;