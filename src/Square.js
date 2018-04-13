import React, { Component } from "react";

class Square extends Component {
  render() {
    console.log("rendering a square~");
    return (
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: this.props.color,
          display: "inline-block"
        }}
        onClick={this.props.handleClick}
      />
    );
  }
}

export default Square;
