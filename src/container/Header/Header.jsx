import React from 'react';
import {images} from "../../constants"
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New flavour" />
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className="p__opensans" style={{margin:"2rem 0"}}>we are a portuguese restaurant that explores old recipes, and brings to your table forgotten flavors of our gastronomy.</p>
      <button className='custom'>Explore</button>
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt='welcome'/>
    </div>
  </div>
);

export default Header;
