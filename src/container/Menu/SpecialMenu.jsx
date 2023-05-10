import React from 'react';
import {images, data} from "../../constants";
import {SubHeading, MenuItem} from "../../components"
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className="app__specialMenu-title">
      <SubHeading title={"Delicius Cocktails"}/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        <div className="app__specialMenu-menu_items">
          {data.wines.map((wine, index)=>{
            return(
              <MenuItem key={index} title={wine.title} tags={wine.tags} price={wine.price}></MenuItem>
            )
          })}
        </div>
      </div>

      <div className="app__speciaMenu_menu-img">
        <img src={images.menu} alt="menu"/>
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cocktail, index)=>{
            return(
              <MenuItem key={index} title={cocktail.title} tags={cocktail.tags} price={cocktail.price}></MenuItem>
            )
          })}
        </div>
      </div>
      
    </div>

    {/* <div style={{marginTop:"15px"}}>
      <button className='custom'>view</button>
    </div> */}
  </div>
);

export default SpecialMenu;
