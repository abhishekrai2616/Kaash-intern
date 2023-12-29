import React from "react";
import "../pages/LightFinder3.css";
import Navbargrey from "../Components/Navbargrey";
import { Link } from "react-router-dom";

//importing icons default State
import generalIllumination from "../Light_finder_images/Types_of_lighting/General_illumination.png";
import softDirect from "../Light_finder_images/Types_of_lighting/Soft direct.png";
import softIndirect from "../Light_finder_images/Types_of_lighting/Soft indirect.png";
import taskLight from "../Light_finder_images/Types_of_lighting/Task light.png";
import highArt from "../Light_finder_images/Types_of_lighting/Highlight art.png";
import highObject from "../Light_finder_images/Types_of_lighting/Highlight object.png";
import highWall from "../Light_finder_images/Types_of_lighting/Highlight wall.png";
import decorative from "../Light_finder_images/Types_of_lighting/Decorative light.png";
import colourfulLight from "../Light_finder_images/Types_of_lighting/Colourful light.png";
import projection from "../Light_finder_images/Types_of_lighting/Projection.png";
import specialApplication from "../Light_finder_images/Types_of_lighting/Special application.png";
import therapuetic from "../Light_finder_images/Types_of_lighting/Therapuetic.png";

// importing background ellipes image

import back_ground_ellipes from "../Light_finder_images/Ellipse_17.png";

// Array of Icon and there name

const Data=[
  {
    name:"General illumination",
    Image:generalIllumination
  },{
    name:"Soft direct",
    Image:softDirect
  },{
    name:"Soft indirect",
    Image:softIndirect
  },{
    name:"Task light",
    Image:taskLight
  },{
    name:"Highlight art",
    Image:highArt
  },{
    name:"Highlight object",
    Image:highObject
  },{
    name:"Highlight wall",
    Image:highWall
  },{
    name:"Decorative",
    Image:decorative
  },{
    name:"Colourful light",
    Image:colourfulLight
  },{
    name:"Projection",
    Image:projection
  },{
    name:"Special application",
    Image:specialApplication
  },{
    name:"Therapeutic",
    Image:therapuetic
  }
];


const LightFinder3 = () => {
  return (
    <div className="h-full relative select-none min-h-screen">
      <div>
        <Navbargrey />
      </div>
      <div className="px-8 md:px-20 bg-[#E4E4E7]">
      {/* Ellipse */}
        <img class="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none" src={back_ground_ellipes}/>
        <div>
          <p className="pl-4 lg:pl-8 pt-8 text-lg">2. Choose type of lighting (select multiple if applicable).</p>
        </div>
        
        <div className="text-black grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 md:gap-x-11 xl:gap-x-14 gap-y-4 pl-4 lg:pl-8 w-3/4 mt-5 relative z-10">
          {Data.map((image)=>{
            return (
            <div className="bg-[#F4F4F5] py-6 box rounded-md cursor-pointer">
            <div className="mx-5 flex flex-col items-center text-center">
            <img className="w-16 icon" src={image.Image} alt={image.name} />
            <p className="pt-2">{image.name}</p>
            </div>
          </div>
            )
          }
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 md:gap-x-11 xl:gap-x-14 gap-y-4 pl-4 lg:pl-8 w-3/4 items-center py-28 lg:py-40 mt-4">
          <div className=" flex gap-5 cursor-pointer">
          <Link to="/lightfinder2">
            <div className="flex gap-6 bg-transparent border-2 border-solid border-[#7246FD] px-5 py-.5 hover:bg-[#7246FD] hover:text-white  text-[#7246FD] bg-[#D4D4D8]">
              <div className="text-2xl lg:text-3xl font-light">{'\u003C'}</div>
              <button className="font-semibold text-base md:text-lg">Back</button>
            </div>
          </Link> 
           <Link to="/lightfinder4">
            <div className="flex gap-6 bg-[#7246FD] border-2 border-solid border-[#7246FD] px-5 py-.5 text-white">
              <button className="font-semibold text-base md:text-lg">Next</button>
              <div className="text-2xl lg:text-3xl font-light">{'\u003E'}</div>
            </div>
          </Link>
          </div>
          <div className="flex gap-x-1 items-center">
            <div className="bg-[#7246FD] h-3.5 w-20 rounded-l-lg"></div>
            <div className="bg-[#7246FD] h-3.5 w-20"></div>
            <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
            <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
            <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
            <div className="bg-[#D4D4D8] h-3.5 w-20 "></div>
            <div className="bg-[#D4D4D8] h-3.5 w-20 rounded-r-lg"></div>
            <text className="text-xl font-semibold text-[#7246FD] ml-5">2/7</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightFinder3;
