import React from 'react';
import Navbargrey from "../Components/Navbargrey";
import { Link } from 'react-router-dom';
import '../pages/LightFinder5.css';

// import transitional from '../images/transitional.png'
// import victorian from '../images/victorian.png'
// import brutalist from '../images/brutalist.png'
// import classical from '../images/classical.png'
// import modern from '../images/modern.png'
// import industrial from '../images/industrial.png'
// import neoClassical from '../images/neo-classical.png'
// import bohemian from '../images/bohemian.png'
// import eclectric from '../images/eclectric.png'
// import architectural from '../images/architectural.png'

import victorian from '../Light_finder_images/Design_style/Victorian.png'
import classical from '../Light_finder_images/Design_style/Classical.png'
import neoClassical from '../Light_finder_images/Design_style/Neo classical.png'
import brutalist from '../Light_finder_images/Design_style/Brutalist.png'
import eclectric from '../Light_finder_images/Design_style/Eclectic.png'
import industrial from '../Light_finder_images/Design_style/Industrial.png'
import minimal from '../Light_finder_images/Design_style/Minimal.png'
import functional from '../Light_finder_images/Design_style/Functional.png'
import hybrid from '../Light_finder_images/Design_style/Hybrid.png'
import hidden from '../Light_finder_images/Design_style/Hidden.png'
import glamour from '../Light_finder_images/Design_style/Glamour.png'
import abstract from '../Light_finder_images/Design_style/Abstract.png'

// importing background ellipes image

import back_ground_ellipes from "../Light_finder_images/Ellipse_17.png";
import EllipseRed from "../images/EllipseRed.png";

// Array of Icon and there name

const Data=[
  {
    name:"Victorian",
    Image:victorian
  },{
    name:"Classical",
    Image:classical
  },{
    name:"Neo classical",
    Image:neoClassical
  },{
    name:"Brutalist",
    Image:brutalist
  },{
    name:"Eclectic",
    Image:eclectric
  },{
    name:"Industrial",
    Image:industrial
  },{
    name:"Minimal",
    Image:minimal
  },{
    name:"Functional",
    Image:functional
  },{
    name:"Hybrid",
    Image:hybrid
  },{
    name:"Hidden",
    Image:hidden
  },{
    name:"Glamour",
    Image:glamour
  },{
    name:"Abstract",
    Image:abstract
  }
];

const handleClick=(index)=>{
  const targetElement = document.getElementById(index)
    let computedStyle = window.getComputedStyle(targetElement);
    if(computedStyle){
      var backgroundColor = computedStyle.backgroundColor;
      if(backgroundColor==='rgb(244, 244, 245)'){
        targetElement.style.backgroundColor = '#7246FD';
      }else{
        targetElement.style.backgroundColor = '#F4F4F5';
      }    
  }
}

const LightFinder5 = () => {

  return (
    <div className="relative select-none">
    <div>
      <Navbargrey />
    </div>
    <div className="px-8 md:px-20 bg-[#E4E4E7] overflow-hidden h-full">
    {/* Ellipse */}
      <img class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none cutt" src={back_ground_ellipes}/>
      <div>
        <p className="pl-4 lg:pl-8 pt-8 text-lg">4. Choose a design style.</p>
      </div>
      
      <div className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 md:gap-x-11 xl:gap-x-14 gap-y-4 pl-4 lg:pl-8 w-3/4 mt-5 relative z-10">
        {Data.map((image,index)=>{
              const id="id"+index;
              return (
              <div id={id} className="bg-[#F4F4F5] py-6 box rounded-md cursor-pointer" onClick={() => handleClick(id)}>
              <div className="mx-5 flex flex-col items-center text-center">
              <img className="w-16 icon" src={image.Image} alt={image.name} />
              <p className="pt-2">{image.name}</p>
              </div>
            </div>
              )
            }
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-11 xl:gap-x-14 gap-y-4 pl-4 lg:pl-8 w-3/4 items-center py-28 lg:py-40 mt-8">
        <div className=" flex gap-5 cursor-pointer">
        <Link to="/lightfinder4">
          <div className="flex gap-6 bg-transparent border-2 border-solid border-[#7246FD] px-5 py-.5 hover:bg-[#7246FD] hover:text-white  text-[#7246FD] bg-[#D4D4D8]">
            <div className="text-2xl lg:text-3xl font-light">{'\u003C'}</div>
            <button className="font-semibold text-base md:text-lg">Back</button>
          </div>
        </Link> 
         <Link to="/lightfinder6">
          <div className="flex gap-6 bg-[#7246FD] border-2 border-solid border-[#7246FD] px-5 py-.5 text-white">
            <button className="font-semibold text-base md:text-lg">Next</button>
            <div className="text-2xl lg:text-3xl font-light">{'\u003E'}</div>
          </div>
        </Link>
        </div>
        <div className="flex gap-x-1 items-center">
          <div className="bg-[#7246FD] h-3.5 w-20 rounded-l-lg  align-bottom"></div>
          <div className="bg-[#7246FD] h-3.5 w-20"></div>
          <div className="bg-[#7246FD] h-3.5 w-20 "></div>
          <div className="bg-[#7246FD] h-3.5 w-20 "></div>
          <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
          <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
          <div className="bg-[#D4D4D8] h-3.5 w-20 rounded-r-lg"></div>
          <text className="text-xl font-semibold text-[#7246FD] ml-5">4/7</text>
        </div>
      </div>
    </div>
  </div>
  );
 }
export default LightFinder5;
