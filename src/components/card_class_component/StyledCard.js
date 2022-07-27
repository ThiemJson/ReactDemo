import styled from "styled-components";

/** StyledCardList  */
export const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
  padding: 20px;
`;

/** StyledCard  */
export const StyledCard = styled.div`
  position: relative;
  width: 400px;
`;

/** CardImage */
export const CardImage = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 8px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: inherit;
`;

export const CardFooter = styled.div`
  width: calc(100% - 36px);
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  padding: 20px;
  border-radius: 20px;
`;

export const CardFooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CardUserInfo = styled.div`
  gap: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardUserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
`;

export const CardUserName = styled.span`
  color: #333;
  font-size: 16px;
  font-weight: 300;
`;

export const CardUserReact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const CardHeart = styled.img`
  object-fit: cover;
`;

export const CardUserReactCount = styled.span`
  font-weight: 400;
  line-height: 24px;
  color: #333;
`;

export const CardUserAvatarImg = styled.img`
  display: block;
  flex-shrink: 0;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardFooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardFooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #000;
`;

export const CardFooterAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  background-clip: text;
  -webkit-background-clip: text;
`;
