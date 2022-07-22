import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

// TODO: - Tạo một ds các data để render lên view
export class TodoList extends Component {
  constructor() {
    super();
    console.log("Component constructor");
  }

  componentDidMount() {
    console.log("Component didMoud");
  }

  render() {
    this.listItem = this.props.listItem;
    const items = this.listItem.map((item, index) => (
      <TodoItem key={index} item={item} />
    ));
    return <div className="TodoList">{items}</div>;
  }
}
