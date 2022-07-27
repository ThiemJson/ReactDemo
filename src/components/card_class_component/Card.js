import { Component } from "react";
import {
  StyledCard,
  CardImage,
  CardImg,
  CardFooter,
  CardFooterTop,
  CardUserInfo,
  CardUserAvatar,
  CardUserAvatarImg,
  CardFooterBottom,
  CardUserName,
  CardUserReactCount,
  CardFooterTitle,
  CardFooterAmount,
  CardHeart,
  CardUserReact,
} from "./StyledCard";

export class Card extends Component {
  render() {
    return (
      <StyledCard>
        {/* Image */}
        <CardImage>
          <CardImg
            src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
            alt="Place bolder"
          />
        </CardImage>
        {/* Footer */}
        <CardFooter>
          {/* Top */}
          <CardFooterTop>
            {/* User Info */}
            <CardUserInfo>
              {/* user avatar */}
              <CardUserAvatar>
                <CardUserAvatarImg
                  src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
                  alt="User avatar"
                />
              </CardUserAvatar>
              {/* User name */}
              <CardUserName>@zndrson</CardUserName>
            </CardUserInfo>
            {/* User react */}
            <CardUserReact>
              {/* Hear icon */}
              <div>
                <CardHeart src="/icon_heart.svg" alt="heart" />
              </div>
              {/* User react count */}
              <CardUserReactCount>256</CardUserReactCount>
            </CardUserReact>
          </CardFooterTop>
          {/* Bottom */}
          <CardFooterBottom>
            <CardFooterTitle>Cosmic Perspective</CardFooterTitle>
            {/* Amout */}
            <CardFooterAmount>12,000 PSL</CardFooterAmount>
          </CardFooterBottom>
        </CardFooter>
      </StyledCard>
    );
  }
}
