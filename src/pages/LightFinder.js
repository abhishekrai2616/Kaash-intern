import React from 'react'
import Navbar from '../Components/Navbar'
import {Routes, Route, useNavigate} from 'react-router-dom';
import One from '../images/PurpOne.png';
import Two from '../images/PurpTwo.png';
import Three from '../images/PurpThree.png';
import "./LightFinder.css";
import { Link } from 'react-router-dom';

const LightFinder = () => {

  return (
    <>
      <div className="light">
        <Navbar />
        <div className="light1">Light finder</div>
        <div className="light2">
        Light finder is a digital tool to help you find the perfect lighting solution for your home, office, shop, or any other project. 
          <br />
        </div>

        <div className="light4">
          How does it work ?
        </div>
        <div className="light5">
          <div>Answer 5 simple questions.</div>
          <br />
          <div>Upload visual information of your project, where you need light. Share any photographs, architectural plans, 3d models.</div>
          <br />
          <div>Submit and our team will contact you with a solution.</div>
        </div>
        <div className='nums'>
          <div className='bullets'>1</div>
          <br/>
          <div className='bullets'>2</div>
          <br/>
          <div className='bullets'>3</div>
          <br/>
          {/* <img className="num1" src={One} alt="1" />
          <img className="num2" src={Two} alt="2" />
          <img className="num3" src={Three} alt="3" /> */}
        </div>
        <div className='gradient1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="859" height="782" viewBox="0 0 859 982" fill="none">
            <g filter="url(#filter0_f_3357_26170)">
              <path d="M1667.23 611.457C1667.96 1055.19 1308.83 1415.5 865.099 1416.23C421.362 1416.96 61.0515 1057.84 60.3216 614.1C59.5917 170.364 418.719 -189.947 862.455 -190.677C1306.19 -191.407 1666.5 167.721 1667.23 611.457Z" fill="url(#paint0_radial_3357_26170)"/>
            </g>
            <defs>
              <filter id="filter0_f_3357_26170" x="0.320312" y="-250.68" width="1726.91" height="1726.91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_3357_26170"/>
              </filter>
              <radialGradient id="paint0_radial_3357_26170" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(863.777 612.778) rotate(95.9255) scale(807.911)">
                <stop stop-color="#FFFF00"/>
                <stop offset="0.2375" stop-color="#7246FD"/>
                <stop offset="0.425" stop-color="#6234F4"/>
                <stop offset="0.64375" stop-color="#D9D9D9" stop-opacity="0"/>
              </radialGradient>
            </defs>
          </svg>  
        </div>


        <div className="light7">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder2">
          <button className='button1' id='start-btn'>Start</button>
        </Link>
        </div>
      </div>

    </>
  )
}
export default LightFinder;
