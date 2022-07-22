import "./App.css";
import { TodoList } from "./components/todolist/TodoList";

function App() {
  console.log("app re-build");
  const listItem = [
    { title: "Đi đá bóng", isComplete: false },
    { title: "Mua bim bim", isComplete: true },
    { title: "Đi đổ xăng", isComplete: false },
  ];
  return <TodoList listItem={listItem}></TodoList>;
}

export default App;
