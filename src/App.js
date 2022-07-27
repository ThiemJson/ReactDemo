import "./App.css";
import { Card } from "./components/card_class_component/Card";
import { CardList } from "./components/card_class_component/CardList";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
function App() {
  return (
    <CardList>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardList>
  );
}

export default App;
