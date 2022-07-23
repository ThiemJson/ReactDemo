import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      currentValue: 1,
    };
  }

  render() {
    const { currentValue } = this.state;
    return (
      <div
        className="Counter"
        onClick={() => {
          console.log(`Current value: ${this.state.currentValue}`);
          this.setState({ currentValue: currentValue + 1 });
          setTimeout(() => {
            console.log(`update value: ${this.state.currentValue}`);
          }, 2000);
        }}
      >{`Current state: ${currentValue}`}</div>
    );
  }
}
