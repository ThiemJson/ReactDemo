import "./App.css";
import CardList from "./components/card/CardList";
import Card from "./components/card/Card";

function App() {
  return (
    <CardList>
      {Array(6)
        .fill()
        .map(() => (
          <Card />
        ))}
    </CardList>
  );
}

export default App;
