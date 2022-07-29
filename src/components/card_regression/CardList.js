import React from "react";
import styled from "styled-components";

// Temp-data
export const StyledCardListData = [
  {
    backgrounImage:
      "https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?compress=1&resize=1000x750&vertical=top",
    avatar:
      "https://cdn.dribbble.com/users/2400293/avatars/normal/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144",
    name: "Thiem jason",
    reactCount: 200,
    title: "Beautiful Beach",
    amount: 1203,
  },
  {
    backgrounImage:
      "https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top",
    avatar:
      "https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top",
    name: "CDN Dribble",
    reactCount: 123,
    title: "Broscoding",
    amount: 756,
  },
  {
    backgrounImage:
      "https://cdn.dribbble.com/users/2400293/screenshots/18356839/media/ec330dd168694ee5f89c655d2e9dcc62.png?compress=1&resize=1000x750&vertical=top",
    avatar:
      "https://cdn.dribbble.com/users/2400293/avatars/normal/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144",
    name: "VMPT Technology",
    reactCount: 234,
    title: "Technology",
    amount: 412,
  },
  {
    backgrounImage:
      "https://cdn.dribbble.com/users/2400293/screenshots/18733513/media/808ca1b009efd4781844b7e716e13edb.png?compress=1&resize=1000x750&vertical=top",
    avatar:
      "https://cdn.dribbble.com/users/2400293/avatars/normal/d96fe84e413ef11b9a219a84158a739a.jpg?1573205144",
    name: "Thiem jason",
    reactCount: 200,
    title: "Beautiful Beach",
    amount: 1203,
  },
];

const StyledCardList = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 30px;
`;

export const CardList = ({ children }) => {
  return <StyledCardList>{children}</StyledCardList>;
};
