import React, { Component } from "react";
import "./SquareContainer.css";
import Square from "./Square";
import { choice } from "./helpers";

class SquareContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: Array.from({ length: 24 }, () => choice(this.props.allColors))

      // ewww
      // colors: Array.from({ length: 24 }).map(function() {
      //   return choice(this.props.allColors);
      // }, this)
    };
  }

  handleClick(idx) {
    this.setState(prevState => {
      let newColors = [...prevState.colors];
      newColors[idx] = choice(this.props.allColors);
      return { colors: newColors };
    });
  }

  render() {
    let squares = this.state.colors.map((color, i) => (
      <Square
        key={i}
        color={color}
        handleClick={this.handleClick.bind(this, i)}
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
