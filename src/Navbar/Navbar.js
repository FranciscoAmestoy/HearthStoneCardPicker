import React from "react";
// import { MenuList } from "./MenuList";
import cardPickerLogo from "../images/cardPickerLogo.png";
import homeButton from "../images/homeButton.png";
import cardPickerButton from "../images/cardPickerButton.png";
import aboutButton from "../images/aboutButton.png";

const NavBar = () => {
  // const menuList = MenuList.map(({ url, title }, index) => {
  //   return (
  //     <li key={index}>
  //       <a href={url}>{title}</a>
  //     </li>
  //   );
  // });
  return (
    <nav className="navBar">
      <div className="logo">
        <img
          className="cardPickerLogo"
          src={cardPickerLogo}
          alt="cardPickerLogo"
        />
      </div>
      <div className="menuListContainer">
        <a href="/">
          <img className="homeButton" src={homeButton} alt="homeButton" />
        </a>
        <a href="/cardpicker">
          <img
            className="cardPickerButton"
            src={cardPickerButton}
            alt="cardPicker"
          />
        </a>
        <a href="/about">
          <img className="aboutButton" src={aboutButton} alt="aboutButton" />
        </a>
        {/* <ul className="menuList">{menuList}</ul> */}
      </div>
    </nav>
  );
};

export default NavBar;
