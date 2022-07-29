import "./App.css";
import { Card } from "./components/card_regression/Card";
import {
  CardList,
  StyledCardListData,
} from "./components/card_regression/CardList";
// import { Card } from "./components/card_class_component/Card";
// import { CardList } from "./components/card_class_component/CardList";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
function App() {
  return (
    <CardList>
      {StyledCardListData.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </CardList>
  );
}

export default App;
