import React, { Component } from "react";

export class GameCell extends Component {
  constructor(props) {
    super(props);
    console.log("GameCell constructor");
  }

  render() {
    return <div className="GameCell"></div>;
  }
}
