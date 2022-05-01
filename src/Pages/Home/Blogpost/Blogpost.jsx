import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import "./Blogpost.css"
const data = [
    { id: 1, img: 'https://i.ibb.co/DDckybt/blog-hm-1.jpg', heading: "Sports Motorbike for Play in desert", text: "Bikers the most latgest bike store in the wold can serve you latest qulity of motorcycle soucan sell here your motorcycle " },
    { id: 2, img: 'https://i.ibb.co/s6PmWWX/blog-hm-2.jpg', heading: "Motorbike Racing at Octobor", text: "After 30 years of street riding, I downsized from my previous 650 to a smaller, lighter bike that is still capable of highway travel." },
    { id: 3, img: 'https://i.ibb.co/s3rHv03/blog-hm-3.jpg', heading: "Our Latest Collection", text: "This Californian-inspired sporty bagger feels right at home on the UK's roads" },
]
const Blogpost = () => {
    return (
        <div className='blogpost-container container'>
            <div className='mb-5 d-flex justify-content-center align-items-center flex-column'>
                <h2 className='heading text-center mb-3'>Recent <span className='sub-heading-title'>Blogposts</span></h2>
            </div>
            <div data-aos="fade-up" className="blogpost">
                {
                    data.map((blog, index) =>
                        <SingleBlog
                            key={blog.id}
                            blog={blog}
                            index={index}
                        ></SingleBlog>
                    )
                }
            </div>
        </div>
    );
};

export default Blogpost;