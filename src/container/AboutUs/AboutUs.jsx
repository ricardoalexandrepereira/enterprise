import React from 'react';
import images from "../../constants/images"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='spoon image' className='spoon__img'/>
        <p className='p__opensans'>
        we are a portuguese restaurant that explores old recipes, and brings to your table forgotten flavors of our gastronomy.
        </p>
        <button type='button' className='custom'>Know more</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='spoon image' className='spoon__img'/>
        <p className='p__opensans'>
        we are a portuguese restaurant that explores old recipes, and brings to your table forgotten flavors of our gastronomy.
        </p>
        <button type='button' className='custom'>Know more</button>
      </div>

    </div>
  </div>
);

export default AboutUs;
