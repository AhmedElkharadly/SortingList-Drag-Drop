import React from "react";
import Button from "../FancyButton/Button";
import { ascendingIc, descendingIc, listic } from "../svg";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">{listic}Try to Sort them by Drag & Drop</h1>
      <div className="headerButtons">
        <Button icon={ascendingIc} handleClick={props.ascendingbuttonClick} />
        <Button icon={descendingIc} handleClick={props.descendingbuttonClick} />
      </div>
    </div>
  );
}

export default Header;
