import styled from "styled-components";

// export const Background = styled.div`
//   background-color: ${({ bg_color }) => (bg_color ? bg_color : "#000000")};
//   height: 100vh;
//   width: 100%;
// `;

export const HeaderStyle = styled.section`
  position: relative;
  display: flex;
  width: 758px;
  height: 1058px;
`;

export const HeaderDivText = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 350px;
  margin-left: 150px;
  width: 758px;
`;


export const HeaderDivPhoto = styled.div`
  position: absolute;
  z-index: 1;
  left: 700px;
  top: 100px;
`;

