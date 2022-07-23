import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import "./TodoList.css";

// TODO: - Tạo một ds các data để render lên view
export class TodoList extends Component {
  constructor() {
    super();
    console.log("TodoList Component constructor");
  }

  componentWillMount() {
    console.log("TodoList Component willMount");
  }

  componentDidMount() {
    console.log("TodoList Component didMoud");
  }

  componentDidUpdate() {
    console.log("TodoList Component didUpdate");
  }

  componentWillUnmount() {
    console.log("TodoList Component willUnMount");
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidCatch() {
    console.log("TodoList Component didCatch");
  }

  render() {
    console.log("TodoList Component render");
    this.listItem = this.props.listItem;
    const items = this.listItem.map((item, index) => (
      <TodoItem key={index} item={item} />
    ));
    return <div className="TodoList">{items}</div>;
  }
}
