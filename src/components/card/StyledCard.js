import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  position: relative;
`;

export const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const CardContent = styled.div`
  width: calc(100% - 36px);
  bottom: 0%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const CardUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
`;

export const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 100rem;
  flex-shrink: 0;
`;

export const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const CardAmount = styled.span`
  font-size: 18px;
  font-weight: bold;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #2cccff, #20e3b2);
    `};
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;
