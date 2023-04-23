import styled from "styled-components";

interface IButton {
  bgColor?: string,
  fontColor?: string,
}

export const Button = styled.button<IButton>`
  background-color: ${(props) => props.bgColor ? props.bgColor : "#f00"};
  color: ${(props) => props.fontColor ? props.fontColor : "#fff"};
  font-weight: 800;
  height: 56px;
  min-width: 56px;
  padding: 0px 15px;
  border-radius: 8px;
`;

export const DivButton = styled.div`
  margin-top: 25px;
  display: flex;
  gap: 10px;
`