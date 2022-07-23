import { Component } from "react";
import "./TodoItem.css";

export class TodoItem extends Component {
  constructor() {
    super();
    console.log("TodoItem constructor");
  }

  componentWillMount() {
    console.log("TodoItem Component willMount");
  }

  componentDidMount() {
    console.log("TodoItem Component didMoud");
  }

  componentDidUpdate() {
    console.log("TodoItem Component didUpdate");
  }

  componentWillUnmount() {
    console.log("TodoItem Component willUnMount");
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidCatch() {
    console.log("TodoItem Component didCatch");
  }

  render() {
    console.log("TodoItem render");
    const item = this.props.item;
    return (
      <div className={`TodoItem ${item.isComplete ? "TodoItem-complete" : ""}`}>
        <p className="TodoItem-title">{item.title}</p>
      </div>
    );
  }
}
