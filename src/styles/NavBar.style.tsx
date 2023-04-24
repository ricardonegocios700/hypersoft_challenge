import styled from "styled-components";

interface Obj {
  name: string;
  id: string;
}
export interface NavBarProps {
  values: Obj[];
}

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  background-color: #7d00ff;
  color: #fff;
`;

export const NavBarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavBarLink = styled.li`
  margin: 0 20px;
  font-family: "Inter";
  font-size: 36px;
  font-weight: bold;
`;