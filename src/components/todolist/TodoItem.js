import { Component } from "react";
import "./TodoItem.css";

export class TodoItem extends Component {
  constructor() {
    super();
    console.log("TodoItem render");
  }
  render() {
    const item = this.props.item;
    return (
      <div className={`TodoItem ${item.isComplete ? "TodoItem-complete" : ""}`}>
        <p className="TodoItem-title">{item.title}</p>
      </div>
    );
  }
}
