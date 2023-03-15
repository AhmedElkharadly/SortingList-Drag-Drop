import React from "react";
import Button from "../FancyButton/Button";
import { assendingIc, dessendingIc, listic } from "../svg";
import "./header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">{listic}Try to Sort them by Drag & Drop</h1>
      <div className="headerButtons">
        <Button icon={assendingIc} handleClick={props.assendingbuttonClick} />
        <Button icon={dessendingIc} handleClick={props.dessendingbuttonClick} />
      </div>
    </div>
  );
}

export default Header;
