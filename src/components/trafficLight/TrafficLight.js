import { Component } from "react";
import { RED, ORANGE, GREEN } from "../../Utils.js";
import "./TrafficLight.css";

export class TrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: RED,
    };
  }

  componentDidMount() {
    const getNextColor = (currentColor) => {
      switch (currentColor) {
        case RED:
          return { currentColor: ORANGE };
        case ORANGE:
          return { currentColor: GREEN };
        case GREEN:
          return { currentColor: RED };
        default:
          return null;
      }
    };

    // setInterval(() => {
    //   const nextColor = getNextColor(this.state.currentColor);
    //   this.setState(nextColor);
    // }, 1000);

    setInterval(() => {
      this.setState(() => {
        return getNextColor(this.state.currentColor);
      });
    }, 1000);
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="TrafficLight">
        <div
          className={`bulb red ${currentColor === RED ? "active" : ""}`}
        ></div>
        <div
          className={`bulb orange ${currentColor === ORANGE ? "active" : ""}`}
        ></div>
        <div
          className={`bulb green ${currentColor === GREEN ? "active" : ""}`}
        ></div>
      </div>
    );
  }
}
