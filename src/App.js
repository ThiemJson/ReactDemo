import "./App.css";
import {
  CardList,
  StyledCardListData,
} from "./components/card_regression/CardList";
import { Card } from "./components/card_taildwind/Card";
// import { Card } from "./components/card_class_component/Card";
// import { CardList } from "./components/card_class_component/CardList";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
function App() {
  return (
    <CardList>
      <Card data={StyledCardListData[0]} />
    </CardList>
  );
}

export default App;
