import styled from "styled-components";

interface Obj {
  name: string;
  id: string;
}
interface NavBarProps {
  values: Obj[];
}

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 10px;
  background-color: #7d00ff;
  color: #fff;
`;

const NavBarLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavBarLink = styled.li`
  margin: 0 20px;
  font-family: "Inter";
  font-size: 36px;
  font-weight: bold;
`;

const NavBar: React.FC<NavBarProps> = ({ values }) => {
  return (
    <NavBarContainer>
      <NavBarLinks>
        {values.map((i, k) => (
          <NavBarLink key={k}>
            <a href={`#${i.id}`}>{i.name}</a>
          </NavBarLink>
        ))}
      </NavBarLinks>
    </NavBarContainer>
  );
};

export default NavBar;
