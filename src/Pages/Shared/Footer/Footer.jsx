import React from 'react';
import { RiCheckboxMultipleBlankFill } from "react-icons/ri"
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"
import { FaWhatsappSquare } from 'react-icons/fa'
import { BsFillTelephoneOutboundFill } from "react-icons/bs"
import './Footer.css'
const date = new Date()
const Footer = () => {
    return (
        <div className='footer '>
            <div className='d-flex flex-column flex-md-row justify-content-between align-items-center container'>
                <div className="footer-intro text-md-start">
                    <h1 className='sub-title'>Bikers</h1>
                    <p>The most latgest bike store in the wold can serve you <br /> latest ulity of motorcycle soucan sell here your motorcycle </p>
                    <p className='text-uppercase'> For Support</p>
                    <p><BsFillTelephoneOutboundFill className='me-2' /> 01234455667</p>
                </div>
                <div className='quick-links text-center mt-5 mt-md-0'>
                    <h4>Quick Links</h4>
                    <p><RiCheckboxMultipleBlankFill style={{ color: "var(--primary-color)" }} className='me-2' /><small>Home</small></p>
                    <p><RiCheckboxMultipleBlankFill style={{ color: "var(--primary-color)" }} className='me-2' /><small>Inventory</small></p>
                    <p><RiCheckboxMultipleBlankFill style={{ color: "var(--primary-color)" }} className='me-2' /><small>Contact</small></p>
                    <p><RiCheckboxMultipleBlankFill style={{ color: "var(--primary-color)" }} className='me-2' /><small>Blogs</small></p>
                </div>
                <div className="socials d-flex  justify-content-center gap-2 flex-row flex-md-column mt-4 mt-md-0">
                    <p className='fs-5'><AiFillFacebook /></p>
                    <p className='fs-5'><AiFillLinkedin /></p>
                    <p className='fs-5'><AiFillInstagram /></p>
                    <p className='fs-5'><FaWhatsappSquare /></p>
                </div>
            </div>
            <div className='text-black bg-secondary' >
                <small>{'\u00A9'} Copyright restricted {date.getFullYear()}</small>
            </div>
        </div>
    );
};

export default Footer;