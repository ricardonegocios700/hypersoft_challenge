import styled from "styled-components";

export const Background = styled.div`
  background-color: #000000;
  color: #ffffff;
  /* height: 100%;
  width: 100%; */
  font-family: "Inter";
`;

export const H1 = styled.h1`
  color: ${(props) => props.color || "#fff"};
  font-size: 80px;
`;

export const P = styled.p`
  color: ${(props) => props.color || "#fff"};
  font-size: 25px;
`;

export const H1Expertise = styled.h1`
  color: ${(props) => props.color || "#ED1CA6"};
  font-size: 64px;
`;

export const PExpertise = styled.p`
  color: ${(props) => props.color || "#fff"};
  font-size: 25px;
`;

export const Div = styled.div<{ w?: string; h?: string }>`
  ${(props) => props.w && `width: ${props.w};`};
  ${(props) => props.h && `heigth: ${props.h};`};
  margin-top: "236px";
  margin-left: "291px";
`;

export const ImgHeader = styled.div`
  position: "absolute";
  top: 0;
  left: 0;
  width: 870px;
  height: 944px;
  background-image: url("/userPhoto.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ImgServices = styled.div`
  position: "absolute";
  top: 0;
  left: 100px;
  width: 560px;
  height: 542px;
  background-image: url("/services.png");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DivBack = styled.div`
  position: absolute;
  z-index: 0;
  left: 900px;
  width: 900px;
  height: 972px;
  background-color: #7d00ff;
`;