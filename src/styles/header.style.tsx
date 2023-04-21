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

export const DivText = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 200px;
  margin-left: 150px;
  width: 758px;
`;

export const DivPhoto = styled.div`
  position: absolute;
  z-index: 1;
  left: 600px;
  top: 50px;
`;

export const DivBack = styled.div`
  position: absolute;
  z-index: 0;
  left: 900px;
  width: 900px;
  height: 972px;
  background-color: #7d00ff;
`;
