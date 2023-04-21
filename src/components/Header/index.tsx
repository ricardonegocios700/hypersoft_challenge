import { H1, ImageContainer, P } from "@/styles/Style";
import { DivBack, DivPhoto, DivText, HeaderStyle } from "@/styles/header.style";
import NavBar from "../NavBar";

export const Header = () => {
  const navBarValues = ["ABOUT", "SERVICES", "WORKS", "CONTACT"];

  return (
    <HeaderStyle>
      <DivText>
        <H1>Hello, I&apos;m John, a</H1>
        <H1 color="#7D00FF">Software Engineer.</H1>
        <P>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </P>
      </DivText>

      <DivPhoto>
        <ImageContainer></ImageContainer>
      </DivPhoto>
      <DivBack>
        <NavBar values={navBarValues} />
      </DivBack>
    </HeaderStyle>
  );
};
