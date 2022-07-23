import "./App.css";
import { Counter } from "./components/counter/Counter";
import { TodoList } from "./components/todolist/TodoList";

function App() {
  const listItem = [
    {
      title: "Đi đá bóng",
      isComplete: true,
    },
    {
      title: "Đi đá bóng",
      isComplete: false,
    },
    {
      title: "Đi đá bóng",
      isComplete: true,
    },
  ];
  return <Counter />;
}

export default App;
