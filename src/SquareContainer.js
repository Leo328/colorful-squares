import React, { Component } from "react";
import "./SquareContainer.css";

class SquareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [this.props.allColors[0]] // this should be an array of 24 random colors,
    };
  }

  render() {
    let squares = this.state.colors.map((color, i) => (
      <div
        key={i}
        style={{ width: "200px", height: "200px", backgroundColor: color }}
      />
    ));
    return (
      <div className="SquareContainer">
        <h1>I'm the square container!</h1>
        <div>{squares}</div>
      </div>
    );
  }
}

SquareContainer.defaultProps = {
  allColors: [
    "Bisque",
    "BlanchedAlmond",
    "BurlyWood",
    "CornflowerBlue",
    "DarkMagenta",
    "DarkSalmon",
    "Gainsboro",
    "HoneyDew",
    "HotPink",
    "Khaki",
    "LawnGreen",
    "LightCoral",
    "LemonChiffon",
    "LightSeaGreen",
    "LimeGreen",
    "Maroon",
    "MistyRose",
    "OliveDrab",
    "OrangeRed"
  ]
};

export default SquareContainer;
