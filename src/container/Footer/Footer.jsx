import React from 'react';
import {Newsletter} from "../../components"
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import {images} from "../../constants"
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg'>
  
   <Newsletter />

   <div className="app__footer-links">

    <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">Rua Miguel Bombarda N 5 , 1350-122</p>
      <p className="p__opensans">+351 913 346 767</p>
      <p className="p__opensans">+351 913 346 000</p>
      
    </div>

    <div className="app__footer-links_logo">
      <img src={images.logoo1} alt="logo" />
      <p className="p__opensans">The best way to find yourself its to lose yourself in the service of others</p>
      <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:"15px"}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram/>
          <FiTwitter/>
        </div>
    </div>

    <div className="app__footer-links_work">
    <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans">Monday-Friday:</p>
      <p className="p__opensans">10:00am - 02:00am</p>
      <p className="p__opensans">Saturday-Sunday</p>
      <p className="p__opensans">10:00am - 03:00am</p>
    </div>
    

   </div>

   <div className="fotter__copyright">
    <p>2023 Bustad G. All rights reserved</p>
   </div>
  </div>
);

export default Footer;
