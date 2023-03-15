import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div className="wrapper">
      <button onClick={props.handleClick()}>
        <p className="buttonInputs">
          {props.icon}
        </p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

export default Button;
