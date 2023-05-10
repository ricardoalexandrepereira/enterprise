import React from 'react';
import {images} from "../../constants"
import {SubHeading} from "../../components"
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's says"/>
      <h1 className='headtext__cormorant'>What we have to share</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi ex porro commodi mollitia doloremque quae aperiam temporibus, repellat necessitatibus.</p>
        </div>
        <p className="p__opensans">consectetur adipisicing elit. Alias excepturi ex porro</p>
      </div>

      <div className="app__chef-sign">
        <p>Ellio Smith</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
    
  </div>
);

export default Chef;
