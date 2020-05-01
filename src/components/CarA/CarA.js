import React from 'react';
import './CarA.css';
import back_apple_002 from '../img/back_apple_002.png'
import bottle_apple_002 from '../img/bottle_apple_002.png'
import front_apple_002 from '../img/front_apple_002.png'

import back_grapes_001 from '../img/back_grapes_001.png'
import bottle_grapes_001 from '../img/bottle_grapes_001.png'
import front_grapes_001 from '../img/front_grapes_001.png'

import back_strawberry_003 from '../img/back_strawberry_003.png'
import bottle_strawberry_003 from '../img/bottle_strawberry_003.png'
import front_strawberry_003 from '../img/front_strawberry_003.png'


export default function CarA(props) {

  return (
    <div classNameName="car_a">
      <section className="page-wrapper" >

<div className="slider">
  
  <ul className="slider-list">
    
    <li className="slider-list__item  ">
      <span className="back__element">
        <img src={back_apple_002} />
      </span>
      <span className="main__element">
        <img src={bottle_apple_002} />
      </span>
      <span className="front__element">
        <img src={front_apple_002} />
      </span>
      <span className="title__element">
        <span className="title">apple</span>
      </span>
      <span className="more__element">
        <span className="content">
          <span className="headline">apple</span>
          <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
          <span className="link">
            <div className="fill"></div>
            <a href="#">Open catalog</a>
          </span>
        </span>
      </span>
     </li>

    <li className="slider-list__item">
      <span className="back__element">
        <img src={back_grapes_001} />
      </span>
      <span className="main__element">
        <img src={bottle_grapes_001} />
      </span>
      <span className="front__element">
        <img src={front_grapes_001} />
      </span>
      <span className="title__element">
        <span className="title">grapes</span>
      </span>
      <span className="more__element">
        <span className="content">
          <span className="headline">grapes</span>
          <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
          <span className="link">
            <div className="fill fill-dark"></div>
            <a href="#">Open catalog</a>
          </span>
        </span>
      </span>
     </li>

     <li className="slider-list__item">
      <span className="back__element">
        <img src={back_strawberry_003} />
      </span>
      <span className="main__element">
        <img src={bottle_strawberry_003} />
      </span>
      <span className="front__element">
        <img src={front_strawberry_003} />
      </span>
      <span className="title__element">
        <span class="title">strawberry</span>
      </span>
      <span className="more__element">
        <span className="content">
          <span className="headline">strawberry</span>
          <span className="excerpt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ratione nisi perferendis? Nemo in accusamus cupiditate officiis.</span>
          <span className="link">
              <div className="fill"></div>
            <a href="#">Open catalog</a>
          </span>
        </span>
      </span>
     </li>
     
  </ul>
  
  <div className="slider__nav-bar">
    <a className="nav-control"></a>
    <a className="nav-control"></a>
    <a className="nav-control"></a>
  </div>
  
  <div className="slider__controls">
    <a className="slider__arrow slider__arrow_prev"></a>
    <a className="slider__arrow slider__arrow_next"></a>
  </div>

</div>      

</section>
    </div>
  );
}