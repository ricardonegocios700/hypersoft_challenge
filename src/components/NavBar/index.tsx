import {
  NavBarContainer,
  NavBarLink,
  NavBarLinks,
  NavBarProps,
} from "@/styles/NavBar.style";

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
