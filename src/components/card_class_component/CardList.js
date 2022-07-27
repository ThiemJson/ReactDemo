import { Component } from "react";
import { StyledCardList } from "./StyledCard.js";

export class CardList extends Component {
  render() {
    return (
      <StyledCardList className="CardList">
        {this.props.children}
      </StyledCardList>
    );
  }
}
