import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  .card-image {
    width: 100%;
    height: 100%;
    border-radius: 8px;

    .card-img {
      width: 100%;
      height: 100%;
      border-radius: inherit;
      display: block;
      flex-shrink: 0;
      object-fit: cover;
    }
  }

  .card-content {
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0%;
    position: absolute;
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .user-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        .user-name {
          font-size: 16px;
          font-weight: 300;
          color: #333;
        }

        .user-avatar {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }
      }

      .user-react {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;

        .react-count {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }

    .card-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .card-title {
        font-size: 18px;
        font-weight: bold;
      }

      .card-amount {
        font-size: 18px;
        font-weight: bold;
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
      }
    }
  }
`;

export const Card = ({ data }) => {
  const { backgrounImage, avatar, name, reactCount, title, amount } = data;
  return (
    <StyledCard className="Card">
      {/* Card Div Image */}
      <div className="card-image">
        {/* Card Img */}
        <img
          className="card-img"
          src={
            backgrounImage ||
            "https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top"
          }
          alt="Something photos"
        />
      </div>
      {/* Card content */}
      <div className="card-content">
        {/* Top */}
        <div className="card-top">
          {/* User info */}
          <div className="user-info">
            {/* Avatar + Name */}
            <img
              className="user-avatar"
              src={
                avatar ||
                "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt="Man"
            />
            <span className="user-name"> {name || "@zndrson"}</span>
          </div>
          {/* USer react */}
          <div className="user-react">
            {/* Hearticon + react count */}
            <img src="/icon_heart.svg" alt="heart-icon" />
            <span className="react-count"> {reactCount || "256"}</span>
          </div>
        </div>
        {/* Bottom */}
        <div className="card-bottom">
          {/* Title */}
          <h3 className="card-title">{title || "Cosmic Perspective"}</h3>
          {/* Amount */}
          <span className="card-amount">{`${amount} PSL` || "12,000 PSL"}</span>
        </div>
      </div>
    </StyledCard>
  );
};
