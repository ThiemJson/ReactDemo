import React, { Component } from "react";
import { CounterContext } from "../context/CounterContext";

export class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          updateCount: this.updateCount,
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
