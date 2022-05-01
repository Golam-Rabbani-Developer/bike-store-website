import React, { useEffect } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri'
import { useInView } from 'react-intersection-observer';
import { animations, motion, useAnimation } from 'framer-motion';
import './News.css'
const News = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation({
        threshold: 0.2
    })
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: 'spring',
                duration: 1,
                bounce: 3
            })
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }
    }, [inView])
    return (
        <div className='news container mx-auto row '>
            <div ref={ref}></div>
            <div className="new-img col-12 col-md-6">
                <motion.img
                    animate={animation}
                    className='news-img-img' src="https://i.ibb.co/fF7cH0G/newsletter-img-1.png" alt="" />
            </div>
            <div className="news-text col-12 col-md-6 d-flex flex-column justify-content-center align-items-center py-4 py-md-0">
                <h5 className='heading mb-4'>Subscribe Our Newsletters</h5>
                <form className='mx-auto'>
                    <input className='ps-3 py-1 rounded-2' type="email" name="email" id="email" placeholder='Your Email' />
                    <button className='py-1 rounded-2' type="submit">
                        <RiSendPlaneFill />
                    </button>

                </form>
            </div>
        </div>
    );
};

export default News;