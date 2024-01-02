import React, { useState} from "react";
import "../pages/LightFinder2.css";


import "./LightFinder2.css";

// importing popup details from lightfinder2.js
import popupDeatils from "./LightFinder2Info";

// importing default states images ................................
import Home_default from "../Light_finder_images/Location/Home.png";
import Office3_default from "../Light_finder_images/Location/Office3.png";
import Hotel_default from "../Light_finder_images/Location/Hotel.png";
import Cafe_default from "../Light_finder_images/Location/Cafe.png";
import Restaurant_default from "../Light_finder_images/Location/Restaurant.png";
import shop_default from "../Light_finder_images/Location/Shop.png";
import Museum_default from "../Light_finder_images/Location/Exhibition.png";

import Factory_default from "../Light_finder_images/Location/Factory.png";
import Warehouse_default from "../Light_finder_images/Location/Warehouse2.png";
import Corporate_default from "../Light_finder_images/Location/Corporate event.png";
import Concert_default from "../Light_finder_images/Location/Concerts.png";
import Celebration_default from "../Light_finder_images/Location/Celebration.png";
import Sports_default from "../Light_finder_images/Location/Sports.png";
import Hospital_default from "../Light_finder_images/Location/Hospital.png";

import Street_default from "../Light_finder_images/Location/Street.png";
import Park_default from "../Light_finder_images/Location/Park.png";
import Garden_default from "../Light_finder_images/Location/Garden.png";
import Facade_default from "../Light_finder_images/Location/Facade.png";
import Yacht_default from "../Light_finder_images/Location/Yacht.png";
import Airplane_default from "../Light_finder_images/Location/Airplane.png";
import Loco_default from "../Light_finder_images/Location/Locomotives.png";


// importing bg image
import EllipseFinderdecobg from "../images/EllipseFinderdecobg.png";

const LightFinder2 = () => {
  const lightStyles = {
    LightImg: {
      backgroundImage: "url('../images/EllipseFinderdecobg.png')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
    },
  };

  // selection of div..................................
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelect = (category) => {
    // Check if the category is already selected
    if (selectedCategory === category) {
      // If yes, remove the selection
      setSelectedCategory(null);
    } else {
      // If no, select the category
      setSelectedCategory(category);
    }
  };

  const getCategoryStyle = (category) => {
    return {
      background:
        selectedCategory === category
          ? "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)"
          : "white",
    };
  };
  const renderDiv = (category, imageSrc, label) => (
    <div
      className={`bg-${
        selectedCategory === category ? "[#7246FD]" : "white"
      } w-3/4 p-4 flex flex-col items-center justify-center rounded-md`}
      onClick={() => handleSelect(category)}
      onDoubleClick={() => handleSelect(category)}
    >
      <div
        className=""
        onMouseEnter={() => {
          if (selectedCategory !== category) {
            document.getElementById("image-" + category).style.background =
              "linear-gradient(to bottom, transparent 4.48%, rgba(252, 255, 103, 0.932) 98.23%)";
          }
        }}
        onMouseLeave={() => {
          if (selectedCategory !== category) {
            document.getElementById("image-" + category).style.background =
              "white";
          }
        }}
      >
        <img
          style={getCategoryStyle(category)}
          id={`image-${category}`}
          className="w-16 box "
          src={imageSrc}
          alt=""
        />
      </div>
      <p
        className={`pt-2 ${selectedCategory === category ? "text-white" : ""}`}
      >
        {label}
      </p>
    </div>
  );

  // Const LightFinder Popup Checkboxes.........................
  const [isopenPopup, setIsopenpopup] = useState(false);

  const [popupContent, setPopupContent] = useState({
    heading: "",
    check1: "",
    check2: "",
    check3: "",
    check4: "",
    check5: "",
    check6: "",
    check7: "",
    check8: "",
    check9: "",
    check10: "",
    check11: "",
    check12: "",
    check13: "",
    check14: "",
    check15: "",
    check16: "",
    check17: "",
    check18: "",
    check19: "",
    check20: "",
    check21: "",
    check22: "",
    check23: "",
    check24: "",
    check25: "",
  });

  const openPopup = (
    heading,
    check1,
    check2,
    check3,
    check4,
    check5,
    check6,
    check7,
    check8,
    check9,
    check10,
    check11,
    check12,
    check13,
    check14,
    check15,
    check16,
    check17,
    check18,
    check19,
    check20,
    check21,
    check22,
    check23,
    check24,
    check25
  ) => {
    setPopupContent({
      heading,
      check1,
      check2,
      check3,
      check4,
      check5,
      check6,
      check7,
      check8,
      check9,
      check10,
      check11,
      check12,
      check13,
      check14,
      check15,
      check16,
      check17,
      check18,
      check19,
      check20,
      check21,
      check22,
      check23,
      check24,
      check25,
    });
    setIsopenpopup(true);
  };

  const closePopup = () => {
    setIsopenpopup(false);
  };

  return (
    <>
        <div
          className="px-28 md:pb-64"
          style={{
            ...lightStyles.LightImg,
            backgroundImage: `url(${EllipseFinderdecobg})`,
          }}
        >
          <div>
            <p className="pl-8 pt-8 text-lg">Where do you need light ?</p>
          </div>

          {/*===== images start here===== */}
          <div className="text-black text-center grid grid-cols-7 gap-4 px-8  mt-5 ">
            <div
              onClick={() =>
                openPopup(
                  popupDeatils.Home.heading,
                  popupDeatils.Home.check1,
                  popupDeatils.Home.check2,
                  popupDeatils.Home.check3,
                  popupDeatils.Home.check4,
                  popupDeatils.Home.check5,
                  popupDeatils.Home.check6,
                  popupDeatils.Home.check7,
                  popupDeatils.Home.check8,
                  popupDeatils.Home.check9,
                  popupDeatils.Home.check10,
                  popupDeatils.Home.check11,
                  popupDeatils.Home.check12
                )
              }
            >
              {renderDiv("Home", Office3_default, "Home")}
            </div>
            {renderDiv("Office", Office3_default, "Office")}
            {renderDiv("Hotel", Hotel_default, "Hotel")}
            {renderDiv("Cafe", Cafe_default, "Cafe")}
            {renderDiv("Restaurant", Restaurant_default, "Restaurant")}
            {renderDiv("shop", shop_default, "shop")}
            <div
              onClick={() =>
                openPopup(
                  popupDeatils.Museum.heading,
                  popupDeatils.Museum.check1,
                  popupDeatils.Museum.check2,
                  popupDeatils.Museum.check3,
                  popupDeatils.Museum.check4,
                  popupDeatils.Museum.check5,
                  popupDeatils.Museum.check6,
                  popupDeatils.Museum.check7,
                  popupDeatils.Museum.check8,
                  popupDeatils.Museum.check9,
                  popupDeatils.Museum.check10,
                  popupDeatils.Museum.check11,
                  popupDeatils.Museum.check12,
                  popupDeatils.Museum.check13,
                  popupDeatils.Museum.check14,
                  popupDeatils.Museum.check15
                )
              }
            >
              {renderDiv("Museum", Museum_default, "Museum")}
            </div>

            {renderDiv("Factory", Factory_default, "Factory")}
            {renderDiv("Warehouse", Warehouse_default, "Warehouse")}
            {renderDiv("Corporate", Corporate_default, "Corporate")}
            {renderDiv("Concert", Concert_default, "Concert")}
            {renderDiv("Celebration", Celebration_default, "Celebration")}
            {renderDiv("Sports", Sports_default, "Sports")}
            {renderDiv("Hospital", Hospital_default, "Hospital")}

            {renderDiv("Street", Street_default, "Street")}
            {renderDiv("Park", Park_default, "Park")}
            {renderDiv("Garden", Garden_default, "Garden")}
            {renderDiv("Facade", Facade_default, "Facade")}
            {renderDiv("Yactch", Yacht_default, "Yactch")}
            {renderDiv("Airplane", Airplane_default, "Airplane")}
            {renderDiv("Locomotives", Loco_default, "Locomotives")}
          </div>
        </div>

      {isopenPopup && (
        <div className="popup bg-white p-5">
          <div className="flex flex-row justify-between items-center">
            <h3>{popupContent.heading}</h3>
            <button onClick={closePopup}>X</button>
          </div>

          <div className="flex gap-28 pt-5">
            <p>Choose as applicable</p>

            <div className="flex gap-5">
              <input type="checkbox" className="w-4 h-4" />
              <p>All</p>
            </div>
          </div>

          <div className="grid grid-cols-3 pt-5 gap-1">
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check1}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check2}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check3}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check4}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check5}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check6}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check7}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check8}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check9}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check10}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check11}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check12}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check13}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check14}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check15}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check16}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check17}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check18}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check19}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check20}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check21}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check22}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check23}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check24}</p>
            </div>
            <div className="flex gap-4">
              <input type="checkbox" className="w-4 h-4" />
              <p>{popupContent.check25}</p>
            </div>
          </div>

          <div className="pt-5 flex float-right">
            <button className="bg-[#7246FD] text-white px-6 py-2">
              confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LightFinder2;
