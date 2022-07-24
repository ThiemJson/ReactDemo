import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    // this.intervalId = setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    // }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className="Counter">{this.props.children(this.state)}</div>;
  }
}
