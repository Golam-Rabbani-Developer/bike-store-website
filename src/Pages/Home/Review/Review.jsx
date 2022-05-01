import { Carousel } from 'react-bootstrap';
import React from 'react';
import img1 from '../../../images/review/testimonial-1 (1).jpg'
import img2 from '../../../images/review/testimonial-2 (1).png'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import "./Review.css"
const Review = () => {

    return (
        <div className=' carousel-container p-5'>
            <div className="container">
                <div className='mb-5 d-flex justify-content-center align-items-center flex-column'>
                    <h2 className='heading text-center mb-3 text-white'><span className='sub-heading-title heading-review '>Customer</span> <span >Thoughts</span></h2>
                    <p className='fs-4 fw-bold text-muted'>Quality is Our Goals</p>
                </div>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item >
                        <div className='row'>
                            <div data-aos="fade-up-left" className='col-12 col-md-5 d-flex justify-content-center align-items-center '>
                                <div style={{ width: "320px", height: "400px" }} className='image pt-3 pt-md-5 mb-5'>
                                    <img className='img' width="300px" height="464px"
                                        src={img1}
                                        alt="First slide"
                                    />
                                </div>
                            </div>
                            <div data-aos="fade-up-right" className="carouseltext col-12 col-md-7 d-flex justify-content-center align-items-center align-items-md-start  flex-column mt-5 mt-md-0 text-white">
                                <h1 className='heading text-white'>James Momen Nirob</h1>
                                <p className='pe-4 text-md-start text-center '><strong>
                                    <ImQuotesLeft className='me-3' />
                                    The engine is a true gem. Loads of low down grunt and crisp throttle control. Smooth in town at low speeds, linear power delivery. Comfortable bike to ride with good suspension. This bike can do everything very well from short trips to the shops to long days in the saddle
                                    <ImQuotesRight className='ms-3' /></strong>
                                </p>
                                <p>James Momen Nirob</p>
                                <p>CEO,ASEKHA</p>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item className='row' >
                        <div className="row">
                            <div data-aos="fade-up-left" className=' col-12 col-md-5 d-flex justify-content-center align-items-center'>
                                <div style={{ width: "320px", height: "400px" }} className='image pt-3 pt-md-5  mb-5'>
                                    <img className='img' width="300px" height="464px"
                                        src={img2}
                                        alt="Second slide"
                                    />
                                </div>
                            </div>

                            <div data-aos="fade-up-right" className="carouseltext col-12 col-md-7 d-flex justify-content-center align-items-center align-items-md-start  flex-column mt-5 mt-md-0 text-white">
                                <h1 className='heading '>Ayash Hisham</h1>
                                <p className='pe-4 text-md-start text-center'><strong>
                                    <ImQuotesLeft className='me-3' />
                                    Great handling and power delivery. Choice of ride modes limited to road or rain on the standard model, other modes available on the SE. Good fuel economy, ususally 60-65 mpg unless you really cane it. Solid build quality and finish. Only downside is that the satndard seat is like sitting on
                                    <ImQuotesRight className='ms-3' /></strong></p>
                                <p>Ayash Hisham</p>
                                <p>COO,ASEKHA</p>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Review;