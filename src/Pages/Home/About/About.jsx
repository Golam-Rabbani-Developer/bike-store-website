import React, { useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { motion, useAnimation } from "framer-motion"
import './About.css'
import { useInView } from 'react-intersection-observer';
const About = () => {
    const { ref, inView } = useInView()
    const animation = useAnimation({
        threshold: 0.2
    })
    useEffect(() => {
        console.log("inview object", inView)
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: 1,
                    bounce: 0.3,
                }
            });
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }

    }, [inView])

    return (
        <div className='about-container container mx-auto '>
            <div className='d-flex justify-content-center align-items-center flex-column '>
                <h2 className='heading text-center mb-3'>Know <span className='sub-heading-title'>Bikers</span></h2>
                {/* <div className="review-float"></div> */}
            </div>
            <div className='about d-flex justify-content-between align-items-center flex-column flex-md-row'>
                <div className="about-text text-start">

                    <h1 className='heading'><span className='sub-title'>Bikers</span> WORLD MOST LARGEST <span className='sub-title'>MOTORCYCLE STORE</span></h1>
                    <p>The most latgest bike store in the wold can serve you latest qulity of motorcycle also you can sell here your motorcycle.We  offer clothing and other accessories, spare and replacement parts, tools, and a variety of services. </p>
                    <p className='fs-3 fw-bold'>Have any question ?</p>
                    <p className='phone mt-4'><span onClick={() => window.open('tel:92949699')} className='global-btn py-3 fs-6'><BsFillTelephoneFill /> </span><span className='bg-dark text-white px-5 py-3 fs-6'>92949699</span></p>
                    <div ref={ref}></div>

                </div>
                <motion.div className="about-img my-5 mt-md-0"
                    animate={animation}
                >
                    <img style={{ maxWidth: "100%" }} data-value="5" src="https://i.ibb.co/0MwgKL7/about-1.png" alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default About;
