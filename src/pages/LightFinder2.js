import React, { useState, useEffect } from "react";
import "../pages/LightFinder2.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

// import homeeee from '../images/Homeeeeee.png'
// import homeee from '../images/homeee.png'
// import Home from '../images/Home.png'
import HomeBtn from "../images/Home.png";
import HotelBtn from "../images/Hotel.png";
import HospitalBtn from "../images/Hospital.png";
import CafeBtn from "../images/Cafe.png";
import RestaurantBtn from "../images/Restaurant.png";
import ShopBtn from "../images/Shop.png";
import OfficeBtn from "../images/Office3.png";

import CorporateBtn from "../images/Corporate event.png";
import FactoryBtn from "../images/Factory.png";
import WarehouseBtn from "../images/Warehouse2.png";
import ConcertBtn from "../images/Concerts.png";
import MuseumBtn from "../images/Exhibition.png";
import CelebrationBtn from "../images/Celebration.png";
import SportsBtn from "../images/Sports.png";

import StreetBtn from "../images/Street.png";
import ParkBtn from "../images/Park.png";
import GardenBtn from "../images/Garden.png";
import FacadeBtn from "../images/Facade.png";
import YachtBtn from "../images/Yacht.png";
import AirplaneBtn from "../images/Airplane.png";
import LocoBtn from "../images/Locomotives.png";

import backBtn from "../images/backbtn.png";
import nextBtn from "../images/nextbtn.png";

import backhover from "../images/backhover.png";
import nexthover from "../images/nexthover.png";
import cross17 from "../images/cross17.png";

import progress1 from "../images/progress1.png";
import progressblackrect from "../images/progressblackrect.png";
import progresslast from "../images/progresslast.png";
import Checkbox from "./Checkbox";
import Checkbox1 from "./Checkbox1";
import { Catalogues } from "./mock";
import { Museums } from "./mock1";
import deco from '../images/deco positions.png'
import RadioButtonGroup from "./RadioButtonGroup";

const LightFinder2 = () => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(list.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  const [isCheckAll1, setIsCheckAll1] = useState(false);
  const [isCheck1, setIsCheck1] = useState([]);
  const [list1, setList1] = useState([]);

  useEffect(() => {
    setList1(Museum);
  }, [list1]);

  const handleSelectAll1 = (e) => {
    setIsCheckAll1(!isCheckAll1);
    setIsCheck1(list1.map((li1) => li1.id));
    if (isCheckAll1) {
      setIsCheck1([]);
    }
  };

  const handleClick1 = (e) => {
    const { id1, checked1 } = e.target;
    setIsCheck1([...isCheck1, id1]);
    if (!checked1) {
      setIsCheck(isCheck1.filter((item) => item !== id1));
    }
  };

  console.log(isCheck1);

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  const Museum = list1.map(({ id, name1 }) => {
    return (
      <>
        <Checkbox1
          key={id}
          type="checkbox"
          name={name1}
          id={id}
          handleClick1={handleClick1}
          isChecked1={isCheck.includes(id)}
        />
        {name1}
      </>
    );
  });

  const [checkbox1, setCheckbox1] = useState(false);
  const [museum, setMuseum] = useState(false);
  const [factory, setFactory] = useState(false);
  const [warehouse, setWarehouse] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [cafe, setCafe] = useState(false);
  const [office, setOffice] = useState(false);
  const [hospital, setHospital] = useState(false);
  const [hotel, setHotel] = useState(false);
  const [shop, setShop] = useState(false);

  let [selectedColor, setSelectedColor] = useState(""); // State to store the selected color
  let [selectedColor1, setSelectedColor1] = useState(""); // State to store the selected color
  let [selectedColor2, setSelectedColor2] = useState(""); // State to store the selected color
  let [selectedColor3, setSelectedColor3] = useState(""); // State to store the selected color
  let [selectedColor4, setSelectedColor4] = useState(""); // State to store the selected color
  let [selectedColor5, setSelectedColor5] = useState(""); // State to store the selected color
  let [selectedColor6, setSelectedColor6] = useState(""); // State to store the selected color
  let [selectedColor7, setSelectedColor7] = useState(""); // State to store the selected color
  let [selectedColor8, setSelectedColor8] = useState(""); // State to store the selected color
  let [selectedColor9, setSelectedColor9] = useState(""); // State to store the selected color
  let [selectedColor10, setSelectedColor10] = useState(""); // State to store the selected color
  let [selectedColor11, setSelectedColor11] = useState(""); // State to store the selected color
  let [selectedColor12, setSelectedColor12] = useState(""); // State to store the selected color
  let [selectedColor13, setSelectedColor13] = useState(""); // State to store the selected color
  let [selectedColor14, setSelectedColor14] = useState(""); // State to store the selected color
  let [selectedColor15, setSelectedColor15] = useState(""); // State to store the selected color
  let [selectedColor16, setSelectedColor16] = useState(""); // State to store the selected color
  let [selectedColor17, setSelectedColor17] = useState(""); // State to store the selected color
  let [selectedColor18, setSelectedColor18] = useState(""); // State to store the selected color
  let [selectedColor19, setSelectedColor19] = useState(""); // State to store the selected color
  let [selectedColor20, setSelectedColor20] = useState(""); // State to store the selected color
  let [selectedColor21, setSelectedColor21] = useState(""); // State to store the selected color
  
  let [selectedColorWhite, setSelectedColorWhite] = useState(""); // State to store the selected color

  // Function to handle radio button change
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange1 = (e) => {
    setSelectedColor1(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange2 = (e) => {
    setSelectedColor2(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange3 = (e) => {
    setSelectedColor3(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange4 = (e) => {
    setSelectedColor4(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange5 = (e) => {
    setSelectedColor5(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange6 = (e) => {
    setSelectedColor6(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange7 = (e) => {
    setSelectedColor7(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange8 = (e) => {
    setSelectedColor8(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange9 = (e) => {
    setSelectedColor9(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange10 = (e) => {
    setSelectedColor10(e.target.value); // Update the selected color when a radio button is clicked
  };

  const handleColorChange11 = (e) => {
    setSelectedColor11(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange12 = (e) => {
    setSelectedColor12(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange13 = (e) => {
    setSelectedColor13(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange14 = (e) => {
    setSelectedColor14(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange15 = (e) => {
    setSelectedColor15(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange16 = (e) => {
    setSelectedColor16(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange17 = (e) => {
    setSelectedColor17(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange18 = (e) => {
    setSelectedColor18(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange19 = (e) => {
    setSelectedColor19(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange20 = (e) => {
    setSelectedColor20(e.target.value); // Update the selected color when a radio button is clicked
  };
  const handleColorChange21 = (e) => {
    setSelectedColor21(e.target.value); // Update the selected color when a radio button is clicked
  };

  // Home popup
  const [selectAll, setSelectAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Living room", checked: false, className: "label-home" },
    { id: 2, label: "Kitchen", checked: false },
    { id: 3, label: "Terrace/Balcony", checked: false },
    { id: 4, label: "Bedroom", checked: false },
    { id: 5, label: "Bathroom", checked: false },
    { id: 6, label: "Driveway", checked: false },
    { id: 7, label: "Kids room", checked: false },
    { id: 8, label: "Toilet", checked: false },
    { id: 9, label: "Storage", checked: false },
    { id: 10, label: "Study/Office", checked: false },
    { id: 11, label: "Garden", checked: false },
    { id: 12, label: "Garage", checked: false },
  ]);

  const toggleCheckbox = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    setSelectAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
  };

  const toggleSelectAll = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: !selectAll,
    }));
    setCheckboxes(updatedCheckboxes);
    setSelectAll(!selectAll);
  };

  // Museum popup
  const [selectAll1, setSelectAll1] = useState(false);
  const [checkboxes1, setCheckboxes1] = useState([
    { id: 1, label: "Reception", checked: false, className: "label-home" },
    { id: 2, label: "Breakout", checked: false },
    { id: 3, label: "Training room", checked: false },
    { id: 4, label: "Museum shop", checked: false },
    { id: 5, label: "Toilet", checked: false },
    { id: 6, label: "Office", checked: false },
    { id: 7, label: "Gallery", checked: false },
    { id: 8, label: "Storage", checked: false },
    { id: 9, label: "Parking", checked: false },
    { id: 10, label: "Cafe", checked: false },
    { id: 11, label: "Facilities", checked: false },
    { id: 12, label: "Lobby", checked: false },
    { id: 13, label: "Server", checked: false },
    { id: 14, label: "Corridor", checked: false },
    { id: 15, label: "Outdoor", checked: false },
  ]);

  const toggleCheckbox1 = (id) => {
    const updatedCheckboxes1 = checkboxes1.map((checkbox1) =>
      checkbox1.id === id
        ? { ...checkbox1, checked: !checkbox1.checked }
        : checkbox1
    );
    setCheckboxes1(updatedCheckboxes1);
    setSelectAll(updatedCheckboxes1.every((checkbox1) => checkbox1.checked));
  };

  const toggleSelectAll1 = () => {
    const updatedCheckboxes1 = checkboxes1.map((checkbox1) => ({
      ...checkbox1,
      checked: !selectAll1,
    }));
    setCheckboxes1(updatedCheckboxes1);
    setSelectAll1(!selectAll1);
  };

  // Factory popup
  const [selectAll2, setSelectAll2] = useState(false);
  const [checkboxes2, setCheckboxes2] = useState([
    { id: 1, label: "Reception", checked: false, className: "label-home" },
    { id: 2, label: "Open production", checked: false },
    { id: 3, label: "Storage", checked: false },
    { id: 4, label: "Office", checked: false },
    { id: 5, label: "Closed production", checked: false },
    { id: 6, label: "Warehouse", checked: false },
    { id: 7, label: "Meeting room", checked: false },
    { id: 8, label: "Clean room", checked: false },
    { id: 9, label: "Kitchen", checked: false },
    { id: 10, label: "Conference room", checked: false },
    { id: 11, label: "Breakout", checked: false },
    { id: 12, label: "Transport", checked: false },
    { id: 13, label: "Training room", checked: false },
    { id: 14, label: "Toilet", checked: false },
    { id: 15, label: "Outdoor", checked: false },
    { id: 16, label: "Corridor", checked: false },
    { id: 17, label: "Services", checked: false },
    { id: 18, label: "Parking", checked: false },
  ]);

  const toggleCheckbox2 = (id) => {
    const updatedCheckboxes2 = checkboxes2.map((checkbox2) =>
      checkbox2.id === id
        ? { ...checkbox2, checked: !checkbox2.checked }
        : checkbox2
    );
    setCheckboxes1(updatedCheckboxes2);
    setSelectAll(updatedCheckboxes2.every((checkbox2) => checkbox2.checked));
  };

  const toggleSelectAll2 = () => {
    const updatedCheckboxes2 = checkboxes2.map((checkbox2) => ({
      ...checkbox2,
      checked: !selectAll2,
    }));
    setCheckboxes2(updatedCheckboxes2);
    setSelectAll2(!selectAll2);
  };

  // Warehouse popup
  const [selectAll3, setSelectAll3] = useState(false);
  const [checkboxes3, setCheckboxes3] = useState([
    { id: 1, label: "Reception", checked: false, className: "label-home" },
    { id: 2, label: "Storage High", checked: false },
    { id: 3, label: "Kitchen", checked: false },
    { id: 4, label: "Office", checked: false },
    { id: 5, label: "Storage Low", checked: false },
    { id: 6, label: "Transport", checked: false },
    { id: 7, label: "Meeting room", checked: false },
    { id: 8, label: "Clean room", checked: false },
    { id: 9, label: "Outdoor", checked: false },
    { id: 10, label: "Conference room", checked: false },
    { id: 11, label: "Breakout", checked: false },
    { id: 12, label: "Parking", checked: false },
    { id: 13, label: "Training room", checked: false },
    { id: 14, label: "Toilet", checked: false },
    { id: 15, label: "Corridor", checked: false },
    { id: 16, label: "Services", checked: false },
  ]);

  const toggleCheckbox3 = (id) => {
    const updatedCheckboxes3 = checkboxes3.map((checkbox3) =>
      checkbox3.id === id
        ? { ...checkbox3, checked: !checkbox3.checked }
        : checkbox3
    );
    setCheckboxes3(updatedCheckboxes3);
    setSelectAll3(updatedCheckboxes3.every((checkbox3) => checkbox3.checked));
  };

  const toggleSelectAll3 = () => {
    const updatedCheckboxes3 = checkboxes3.map((checkbox3) => ({
      ...checkbox3,
      checked: !selectAll3,
    }));
    setCheckboxes3(updatedCheckboxes3);
    setSelectAll3(!selectAll3);
  };

  // Restaurant popup
  const [selectAll4, setSelectAll4] = useState(false);
  const [checkboxes4, setCheckboxes4] = useState([
    { id: 1, label: "Customer Area", checked: false, className: "label-home" },
    { id: 2, label: "Kitchen", checked: false },
    { id: 3, label: "Storage", checked: false },
    { id: 4, label: "Counter", checked: false },
    { id: 5, label: "Service", checked: false },
    { id: 6, label: "Toilet", checked: false },
  ]);

  const toggleCheckbox4 = (id) => {
    const updatedCheckboxes4 = checkboxes4.map((checkbox4) =>
      checkbox4.id === id
        ? { ...checkbox4, checked: !checkbox4.checked }
        : checkbox4
    );
    setCheckboxes4(updatedCheckboxes4);
    setSelectAll4(updatedCheckboxes4.every((checkbox4) => checkbox4.checked));
  };

  const toggleSelectAll4 = () => {
    const updatedCheckboxes4 = checkboxes4.map((checkbox4) => ({
      ...checkbox4,
      checked: !selectAll4,
    }));
    setCheckboxes4(updatedCheckboxes4);
    setSelectAll4(!selectAll4);
  };

  // Cafe popup
  const [selectAll5, setSelectAll5] = useState(false);
  const [checkboxes5, setCheckboxes5] = useState([
    { id: 1, label: "Customer Area", checked: false, className: "label-home" },
    { id: 2, label: "Kitchen", checked: false },
    { id: 3, label: "Storage", checked: false },
    { id: 4, label: "Counter", checked: false },
    { id: 5, label: "Service", checked: false },
    { id: 6, label: "Toilet", checked: false },
  ]);

  const toggleCheckbox5 = (id) => {
    const updatedCheckboxes5 = checkboxes5.map((checkbox5) =>
      checkbox5.id === id
        ? { ...checkbox5, checked: !checkbox5.checked }
        : checkbox5
    );
    setCheckboxes5(updatedCheckboxes5);
    setSelectAll5(updatedCheckboxes5.every((checkbox5) => checkbox5.checked));
  };

  const toggleSelectAll5 = () => {
    const updatedCheckboxes5 = checkboxes5.map((checkbox5) => ({
      ...checkbox5,
      checked: !selectAll5,
    }));
    setCheckboxes5(updatedCheckboxes5);
    setSelectAll5(!selectAll5);
  };

  // Office popup
  const [selectAll6, setSelectAll6] = useState(false);
  const [checkboxes6, setCheckboxes6] = useState([
    { id: 1, label: "Reception", checked: false, className: "label-home" },
    { id: 2, label: "Breakout", checked: false },
    { id: 3, label: "Training room", checked: false },
    { id: 4, label: "Museum shop", checked: false },
    { id: 5, label: "Toilet", checked: false },
    { id: 6, label: "Office", checked: false },
    { id: 7, label: "Gallery", checked: false },
    { id: 8, label: "Storage", checked: false },
    { id: 9, label: "Parking", checked: false },
    { id: 10, label: "Cafe", checked: false },
    { id: 11, label: "Facilities", checked: false },
    { id: 12, label: "Lobby", checked: false },
    { id: 13, label: "Server", checked: false },
    { id: 14, label: "Corridor", checked: false },
    { id: 15, label: "Outdoor", checked: false },
  ]);

  const toggleCheckbox6 = (id) => {
    const updatedCheckboxes6 = checkboxes6.map((checkbox6) =>
      checkbox6.id === id
        ? { ...checkbox6, checked: !checkbox6.checked }
        : checkbox6
    );
    setCheckboxes6(updatedCheckboxes6);
    setSelectAll6(updatedCheckboxes6.every((checkbox6) => checkbox6.checked));
  };

  const toggleSelectAll6 = () => {
    const updatedCheckboxes6 = checkboxes6.map((checkbox6) => ({
      ...checkbox6,
      checked: !selectAll6,
    }));
    setCheckboxes6(updatedCheckboxes6);
    setSelectAll6(!selectAll6);
  };

  // Hospital popup
  const [selectAll7, setSelectAll7] = useState(false);
  const [checkboxes7, setCheckboxes7] = useState([
    { id: 1, label: "Entrance", checked: false, className: "label-home" },
    { id: 2, label: "Sterile spaces", checked: false },
    { id: 3, label: "Play space", checked: false },
    { id: 4, label: "Lobby", checked: false },
    { id: 5, label: "Patient rooms", checked: false },
    { id: 6, label: "Toilets", checked: false },
    { id: 7, label: "Reception", checked: false },
    { id: 8, label: "Doc / Visit rooms", checked: false },
    { id: 9, label: "Service", checked: false },
    { id: 10, label: "Stairway", checked: false },
    { id: 11, label: "OT", checked: false },
    { id: 12, label: "Kitchen", checked: false },
    { id: 13, label: "Corridor", checked: false },
    { id: 14, label: "Cafe", checked: false },
    { id: 15, label: "Storage", checked: false },
    { id: 16, label: "Emergency", checked: false },
    { id: 17, label: "Staff breakout", checked: false },
    { id: 18, label: "Garden", checked: false },
    { id: 19, label: "First care", checked: false },
    { id: 20, label: "Waiting", checked: false },
    { id: 21, label: "Parking", checked: false },
    { id: 22, label: "Labs", checked: false },
    { id: 23, label: "Office", checked: false },
  ]);

  const toggleCheckbox7 = (id) => {
    const updatedCheckboxes7 = checkboxes7.map((checkbox7) =>
      checkbox7.id === id
        ? { ...checkbox7, checked: !checkbox7.checked }
        : checkbox7
    );
    setCheckboxes7(updatedCheckboxes7);
    setSelectAll7(updatedCheckboxes7.every((checkbox7) => checkbox7.checked));
  };

  const toggleSelectAll7 = () => {
    const updatedCheckboxes7 = checkboxes7.map((checkbox7) => ({
      ...checkbox7,
      checked: !selectAll7,
    }));
    setCheckboxes7(updatedCheckboxes7);
    setSelectAll7(!selectAll7);
  };

  // Hotel popup
  const [selectAll8, setSelectAll8] = useState(false);
  const [checkboxes8, setCheckboxes8] = useState([
    { id: 1, label: "Entrance", checked: false, className: "label-home" },
    { id: 2, label: "Bar", checked: false },
    { id: 3, label: "Business", checked: false },
    { id: 4, label: "Lobby", checked: false },
    { id: 5, label: "Restaurant", checked: false },
    { id: 6, label: "Office / Working", checked: false },
    { id: 7, label: "Reception", checked: false },
    { id: 8, label: "Rooms", checked: false },
    { id: 9, label: "Service", checked: false },
    { id: 10, label: "Stairway", checked: false },
    { id: 11, label: "Play space", checked: false },
    { id: 12, label: "Kitchen", checked: false },
    { id: 13, label: "Corridor", checked: false },
    { id: 14, label: "Washroom", checked: false },
    { id: 15, label: "Storage", checked: false },
    { id: 16, label: "Lounge", checked: false },
    { id: 17, label: "Pool", checked: false },
    { id: 18, label: "Toilet", checked: false },
    { id: 19, label: "Ballroom / Events", checked: false },
    { id: 20, label: "Jardin / Landscape", checked: false },
    { id: 21, label: "Parking", checked: false },
  ]);

  const toggleCheckbox8 = (id) => {
    const updatedCheckboxes8 = checkboxes8.map((checkbox8) =>
      checkbox8.id === id
        ? { ...checkbox8, checked: !checkbox8.checked }
        : checkbox8
    );
    setCheckboxes8(updatedCheckboxes8);
    setSelectAll8(updatedCheckboxes8.every((checkbox8) => checkbox8.checked));
  };

  const toggleSelectAll8 = () => {
    const updatedCheckboxes8 = checkboxes8.map((checkbox8) => ({
      ...checkbox8,
      checked: !selectAll8,
    }));
    setCheckboxes8(updatedCheckboxes8);
    setSelectAll8(!selectAll8);
  };

  // Shop popup
  const [selectAll9, setSelectAll9] = useState(false);
  const [checkboxes9, setCheckboxes9] = useState([
    { id: 1, label: "Shop window", checked: false, className: "label-home" },
    { id: 2, label: "Wall shelves", checked: false },
    { id: 3, label: "Trial", checked: false },
    { id: 4, label: "Furniture", checked: false },
    { id: 5, label: "Counter", checked: false },
    { id: 6, label: "Storage", checked: false },
  ]);

  const toggleCheckbox9 = (id) => {
    const updatedCheckboxes9 = checkboxes9.map((checkbox9) =>
      checkbox9.id === id
        ? { ...checkbox9, checked: !checkbox9.checked }
        : checkbox9
    );
    setCheckboxes9(updatedCheckboxes9);
    setSelectAll9(updatedCheckboxes9.every((checkbox9) => checkbox9.checked));
  };

  const toggleSelectAll9 = () => {
    const updatedCheckboxes9 = checkboxes9.map((checkbox9) => ({
      ...checkbox9,
      checked: !selectAll9,
    }));
    setCheckboxes9(updatedCheckboxes9);
    setSelectAll9(!selectAll9);
  };

  return (
    <div className="light">
      <Navbar />
      <div className="need-light">1. Where do you need light?</div>
      <form>
        <div className="flexbox-container">
          <div className="flexbox-row1">
            <div className="">
              <div
                className="color-display"
                id="home"
                style={{ backgroundColor: selectedColor }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor = "#7246FD")}
                      onChange={handleColorChange}
                      id="home"
                      onClick={() => setCheckbox1(true)}
                    />
                    <img src={HomeBtn} />
                    <p>Home</p>
                  </label>
                </div>
              </div>
            </div>

            {/* <div className=""> */}
            <div
              className="color-display"
              id="office1"
              style={{ backgroundColor: selectedColor6 }}
            >
              <div className="">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor6 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor6 = "#7246FD")}
                    onChange={handleColorChange6}
                    id="office1"
                    onClick={() => setOffice(true)}
                  />
                  <img src={OfficeBtn} />
                  <p>Office</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className=""> */}
            <div
              className="color-display"
              id="hotel"
              style={{ backgroundColor: selectedColor8 }}
            >
              <div className="">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor8 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor8 = "#7246FD")}
                    onChange={handleColorChange8}
                    id="hotel"
                    onClick={() => setHotel(true)}
                  />
                  <img src={HotelBtn} />
                  <p>Hotel</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className=""> */}
            <div
              className="color-display"
              id="cafe"
              style={{ backgroundColor: selectedColor5 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1"
                  style={{ backgroundColor: selectedColor5 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor5 = "#7246FD")}
                    onChange={handleColorChange5}
                    id="cafe"
                    onClick={() => setCafe(true)}
                  />
                  <img src={CafeBtn} />
                  <p>Cafe</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className=""> */}
            <div
              className="color-display"
              id="restaurant"
              style={{ backgroundColor: selectedColor4 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor4 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor4 = "#7246FD")}
                    onChange={handleColorChange4}
                    id="restaurant"
                    onClick={() => setRestaurant(true)}
                  />
                  <img src={RestaurantBtn} />
                  <p>Restaurant</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className="flexbox-item checkboxes"> */}
            <div
              className="color-display"
              id="shop"
              style={{ backgroundColor: selectedColor9 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor9 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor9 = "#7246FD")}
                    onChange={handleColorChange9}
                    id="shop"
                    onClick={() => setShop(true)}
                  />
                  <img src={ShopBtn} />
                  <p>Shop</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className="flexbox-item checkboxes"> */}

            <div
              className="color-display"
              id="museum"
              style={{ backgroundColor: selectedColor1 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor1 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor1 = "#7246FD")}
                    onChange={handleColorChange1}
                    id="museum"
                    onClick={() => setMuseum(true)}
                  />
                  <img src={MuseumBtn} />
                  <p>Museum</p>
                </label>
              </div>
            </div>

            {/* </div> */}
          </div>

          <div className="flexbox-row2">
            {/* <div className="flexbox-item"> */}

            <div
              className="color-display"
              id="factory"
              style={{ backgroundColor: selectedColor2 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor2 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor2 = "#7246FD")}
                    onChange={handleColorChange2}
                    id="factory"
                    onClick={() => setFactory(true)}
                  />
                  <img src={FactoryBtn} />
                  <p>Factory</p>
                </label>
              </div>
            </div>

            {/* </div> */}

            {/* <div className="flexbox-item"> */}

            <div
              className="color-display"
              id="warehouse"
              style={{ backgroundColor: selectedColor3 }}
            >
              <div className="flexbox-item checkboxes">
                <label
                  className="radio-button1 checkboxes"
                  style={{ backgroundColor: selectedColor3 }}
                >
                  <input
                    type="radio"
                    name="color"
                    value="#7246FD"
                    checked={(selectedColor3 = "#7246FD")}
                    onChange={handleColorChange3}
                    id="warehouse"
                    onClick={() => setWarehouse(true)}
                  />
                  <img src={WarehouseBtn} />
                  <p>Warehouse</p>
                </label>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="corporate"
                style={{ backgroundColor: selectedColor10 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor10 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor10 = "#7246FD")}
                      onChange={handleColorChange10}
                      id="corporate"
                    />
                    <img src={CorporateBtn} />
                    <p>
                      Corporate
                      <br />
                      Event
                    </p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="concert"
                style={{ backgroundColor: selectedColor11 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor11 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor11 = "#7246FD")}
                      onChange={handleColorChange11}
                      id="concert"
                    />
                    <img src={ConcertBtn} />
                    <p>Concert</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="celebration"
                style={{ backgroundColor: selectedColor12 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor12 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor12 = "#7246FD")}
                      onChange={handleColorChange12}
                      id="celebration"
                    />
                    <img src={CelebrationBtn} />
                    <p>Celebration</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="sports"
                style={{ backgroundColor: selectedColor13 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor13 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor13 = "#7246FD")}
                      onChange={handleColorChange13}
                      id="sports"
                    />
                    <img src={SportsBtn} />
                    <p>Sports</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="hospital"
                style={{ backgroundColor: selectedColor7 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor7 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor7 = "#7246FD")}
                      onChange={handleColorChange7}
                      id="hospital"
                      onClick={() => setHospital(true)}
                    />
                    <img src={HospitalBtn} />
                    <p>Hospital</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flexbox-row3">
            <div className="">
              <div
                className="color-display"
                id="street"
                style={{ backgroundColor: selectedColor14 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor14 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor14 = "#7246FD")}
                      onChange={handleColorChange14}
                      id="street"
                    />
                    <img src={StreetBtn} />
                    <p>Street</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="park"
                style={{ backgroundColor: selectedColor15 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor15 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor15 = "#7246FD")}
                      onChange={handleColorChange15}
                      id="park"
                    />
                    <img src={ParkBtn} />
                    <p>Park</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="garden"
                style={{ backgroundColor: selectedColor16 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor16 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor16 = "#7246FD")}
                      onChange={handleColorChange16}
                      id="garden"
                    />
                    <img src={GardenBtn} />
                    <p>Garden</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="facade"
                style={{ backgroundColor: selectedColor17 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor17 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor17 = "#7246FD")}
                      onChange={handleColorChange17}
                      id="facade"
                    />
                    <img src={FacadeBtn} />
                    <p>Facade</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="yacht"
                style={{ backgroundColor: selectedColor18 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor18 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor18 = "#7246FD")}
                      onChange={handleColorChange18}
                      id="yacht"
                    />
                    <img src={YachtBtn} />
                    <p>Yacht</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="airplane"
                style={{ backgroundColor: selectedColor19 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor19 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor19 = "#7246FD")}
                      onChange={handleColorChange19}
                      id="airplane"
                    />
                    <img src={AirplaneBtn} />
                    <p>Airplane</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div
                className="color-display"
                id="locomotives"
                style={{ backgroundColor: selectedColor20 }}
              >
                <div className="">
                  <label
                    className="radio-button1 checkboxes"
                    style={{ backgroundColor: selectedColor20 }}
                  >
                    <input
                      type="radio"
                      name="color"
                      value="#7246FD"
                      checked={(selectedColor20 = "#7246FD")}
                      onChange={handleColorChange20}
                      id="locomotives"
                    />
                    <img src={SportsBtn} />
                    <p>Locomotives</p>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="btn-container">
        {/* <button className="button1" id='start-btn' onClick={handleButtonClick}>Start</button> */}
        <Link to="/lightfinder">
          <button className="back-btn" id="back-btn">
            <img src={backBtn} />
            Back
          </button>
        </Link>
        <Link to="/lightfinder3">
          <button className="next-btn" id="next-btn" type="submit">
            Next
            <img src={nextBtn} />
          </button>
        </Link>
      </div>

      <div className="progress-cont1">
        <img src={progress1} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progressblackrect} />
        <img src={progresslast} />
        <div className="num-cont">
          <p className="first-num">1</p>
          <p className="second-num">/7</p>
        </div>
      </div>

      {checkbox1 ? (
        <div className="home-pop">
          <div className="head">
            <h1>Home</h1>
            <button className="x-Button1" onClick={() => setCheckbox1(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={toggleSelectAll}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes.map((checkbox) => (
                <li key={checkbox.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox.checked}
                      onChange={() => toggleCheckbox(checkbox.id)}
                    />
                    {checkbox.label}
                  </label>
                </li>
              ))}
            </ul>

            <button
              type="submit"
              onClick={() => setCheckbox1(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {museum ? (
        <div className="home-pop">
          <div className="head">
            <h1>Museum</h1>
            <button className="x-Button1" onClick={() => setMuseum(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll1}
                  onChange={toggleSelectAll1}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes1.map((checkbox1) => (
                <li key={checkbox1.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox1.checked}
                      onChange={() => toggleCheckbox1(checkbox1.id)}
                    />
                    {checkbox1.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setMuseum(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {factory ? (
        <div className="home-pop">
          <div className="head">
            <h1>Factory</h1>
            <button className="x-Button1" onClick={() => setFactory(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll2}
                  onChange={toggleSelectAll3}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes2.map((checkbox2) => (
                <li key={checkbox2.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox2.checked}
                      onChange={() => toggleCheckbox2(checkbox1.id)}
                    />
                    {checkbox2.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setFactory(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {warehouse ? (
        <div className="home-pop">
          <div className="head">
            <h1>Warehouse</h1>
            <button className="x-Button1" onClick={() => setWarehouse(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll3}
                  onChange={toggleSelectAll3}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes3.map((checkbox3) => (
                <li key={checkbox3.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox3.checked}
                      onChange={() => toggleCheckbox3(checkbox3.id)}
                    />
                    {checkbox3.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setWarehouse(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {restaurant ? (
        <div className="home-pop">
          <div className="head">
            <h1>Restaurant</h1>
            <button className="x-Button1" onClick={() => setRestaurant(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll4}
                  onChange={toggleSelectAll4}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes4.map((checkbox4) => (
                <li key={checkbox4.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox4.checked}
                      onChange={() => toggleCheckbox4(checkbox4.id)}
                    />
                    {checkbox4.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setRestaurant(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {cafe ? (
        <div className="home-pop">
          <div className="head">
            <h1>Cafe</h1>
            <button className="x-Button1" onClick={() => setCafe(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll5}
                  onChange={toggleSelectAll5}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes5.map((checkbox5) => (
                <li key={checkbox5.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox5.checked}
                      onChange={() => toggleCheckbox5(checkbox5.id)}
                    />
                    {checkbox5.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setCafe(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {office ? (
        <div className="home-pop">
          <div className="head">
            <h1>Office</h1>
            <button className="x-Button1" onClick={() => setOffice(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll6}
                  onChange={toggleSelectAll6}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes6.map((checkbox6) => (
                <li key={checkbox6.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox6.checked}
                      onChange={() => toggleCheckbox6(checkbox6.id)}
                    />
                    {checkbox6.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setOffice(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {hospital ? (
        <div className="home-pop">
          <div className="head">
            <h1>Hospital</h1>
            <button className="x-Button1" onClick={() => setHospital(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll7}
                  onChange={toggleSelectAll7}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes7.map((checkbox7) => (
                <li key={checkbox7.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox7.checked}
                      onChange={() => toggleCheckbox7(checkbox7.id)}
                    />
                    {checkbox7.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setHospital(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {hotel ? (
        <div className="home-pop">
          <div className="head">
            <h1>Hotel</h1>
            <button className="x-Button1" onClick={() => setHotel(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll8}
                  onChange={toggleSelectAll8}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes8.map((checkbox8) => (
                <li key={checkbox8.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox8.checked}
                      onChange={() => toggleCheckbox8(checkbox8.id)}
                    />
                    {checkbox8.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setHotel(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}

      {shop ? (
        <div className="home-pop">
          <div className="head">
            <h1>Shop</h1>
            <button className="x-Button1" onClick={() => setShop(false)}>
              <img src={cross17} />
            </button>
          </div>
          <br />

          <div className="catalog">
            <div className="all-div">
              <p>Choose as applicable</p>
              <label className="all">
                <input
                  type="checkbox"
                  checked={selectAll9}
                  onChange={toggleSelectAll9}
                />
                ALL
              </label>
            </div>
            <ul className="ul">
              {checkboxes9.map((checkbox9) => (
                <li key={checkbox9.id}>
                  <label>
                    <input
                      type="checkbox"
                      className="checksss"
                      checked={checkbox9.checked}
                      onChange={() => toggleCheckbox9(checkbox9.id)}
                    />
                    {checkbox9.label}
                  </label>
                </li>
              ))}
            </ul>
            <button
              type="submit"
              onClick={() => setShop(false)}
              className="submit-btn"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : null}
      <img src={deco} className="deco" />
      {/* <RadioButtonGroup /> */}
    </div>
  );
};

export default LightFinder2;
