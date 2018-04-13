import React from "react";
import "./Square.css";

const Square = ({ color, handleClick }) => (
  <div
    className="Square"
    style={{
      backgroundColor: color
    }}
    onClick={handleClick}
  />
);

export default Square;
