import { H1, ImageContainer, P } from "@/styles/Style";
import { DivBack, DivPhoto, DivText, HeaderStyle } from "@/styles/header.style";
import NavBar from "../NavBar";
import { Button, DivButton } from "../Button";
import { FollowMe } from "../FollowMe";

export const Header = () => {
  const mock = [
    { name: "ABOUT", id: "header-style" },
    { name: "SERVICES", id: "services-style" },
    { name: "WORKS", id: "works-style" },
    { name: "CONTACT", id: "contact-style" },
  ];

  return (
    <HeaderStyle id="header-style">
      <DivText>
        <H1>Hello, I&apos;m John, a</H1>
        <H1 color="#7D00FF">Software Engineer.</H1>
        <P>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </P>
        <DivButton>
          <Button bgColor="#7D00FF" fontColor="#fff">
            HIRE ME
          </Button>
          <Button bgColor="#DFE3EB" fontColor="#000">VIEW WORK</Button>
        </DivButton>
        <FollowMe></FollowMe>
      </DivText>

      <DivPhoto>
        <ImageContainer></ImageContainer>
      </DivPhoto>
      <DivBack>
        <NavBar values={mock} />
      </DivBack>
    </HeaderStyle>
  );
};
