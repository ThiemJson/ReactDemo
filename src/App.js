import "./App.css";
import {
  CardList,
  StyledCardListData,
} from "./components/card_regression/CardList";
import { Card } from "./components/card_taildwind/Card";
import {
  StoryCell,
  StoryCreateCell,
} from "./components/facebook_bar_story/StoryCell";
import StoryList from "./components/facebook_bar_story/StoryList";
// import { Card } from "./components/card_class_component/Card";
// import { CardList } from "./components/card_class_component/CardList";
// import Card from "./components/card/Card";
// import CardList from "./components/card/CardList";
function App() {
  return (
    <StoryList>
      <StoryCreateCell></StoryCreateCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
      <StoryCell></StoryCell>
    </StoryList>
  );
}

export default App;
