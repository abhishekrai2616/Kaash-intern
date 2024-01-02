import React from "react";
import "../pages/LightFinder8.css";
import ellpise_lighfinder_bg2 from "../Light_finder_images/Ellipse_17.png";

const LightFinder5 = () => {
  return (
    <>
      <div className="px-8 md:px-20 pb-28 lg:pb-56 h-full w-full">
      <img
          src={ellpise_lighfinder_bg2}
          className="absolute right-0 w-96 md:w-1/2  ms-auto overflow-hidden top-1/2 left-1/2 translate-x-[0%] translate-y-[-50%] select-none"
          alt=""
        />
        <div className="relative relative pt-8 pl-4 lg:pl-8 z-10">
          <div>
            <div>
              <p className="text-base sm:text-lg md:text-xl">
                9. &nbsp; How do you wish to be contacted.
              </p>
            </div>
            <div className="grid grid-cols-2 h-32 gap-2 text-base mt-6 sm:h-20 sm:grid-cols-3 sm:w-full sm:gap-6 md:w-3/4 lg:gap-10 lg:text-lg xl:w-1/2 ">
              <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
                <p>Via e-mail</p>
              </div>
              <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
                <p>Schedule a call</p>
              </div>
              <div className="bg-white flex items-center justify-center rounded-md hover:bg-[#7246fd] hover:text-white">
                <p>Fix a meeting</p>
              </div>
            </div>
          </div>

          <div className="pt-14">
            <p className="text-base sm:text-lg md:text-xl">
              10. &nbsp; Write below if you would like to add any comments. (Max
              1000Words)
            </p>
            <div className="w-3/4 pt-5">
              <textarea
                className="w-full h-32 p-4 border-gray-400 border-2 outline-none"
                placeholder="Write here..."
              />
            </div>
          </div>

          <div className="pt-10">
            <p className="text-base sm:text-lg md:text-xl">
              11. &nbsp; Enter your email
            </p>
            <div className="py-5">
              <input
                className="border-gray-400 border-2 outline-none px-2 w-4/5 lg:w-1/3 py-2 text-lg"
                type="email"
                name="email"
                id=""
                placeholder="hello@email.com"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightFinder5;
