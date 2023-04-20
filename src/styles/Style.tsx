import styled from "styled-components";

export const Background = styled.div`
  background-color: #000000;
  color: #ffffff;
  height: 100%;
  width: 100%;
  font-family: "Inter";
`;

export const H1 = styled.h1`
  color: ${(props) => props.color || "#fff"};
  font-size: 80px;
`;

export const P = styled.p`
  color: ${(props) => props.color || "#fff"};
  font-size: 20px;
`;

export const Div = styled.div`
  ${(props) => props.w && `width: ${props.w};`};
  ${(props) => props.h && `heigth: ${props.h};`};
`;

export const ImageContainer = styled.div`
  width: 870px;
  height: 974px;
  background-image: url("/userPhoto.jpg");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;