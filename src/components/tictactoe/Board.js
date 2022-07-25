import React, { Component } from "react";

export class Board extends Component {
  constructor(props) {
    super(props);
    console.log("Board constructor");
  }

  render() {
    return <div className="Board"></div>;
  }
}
