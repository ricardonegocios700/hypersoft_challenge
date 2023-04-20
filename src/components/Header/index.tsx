import { Div, H1, ImageContainer, P } from "@/styles/Style";
import { HeaderStyle } from "@/styles/header.style";

export const Header = () => {
  return (
    <HeaderStyle style={{ display: "flex" }}>
      <Div w="758px" style={{ marginTop: "236px", marginLeft: "291px" }}>
        <H1>Hello, I'm John, a</H1>
        <H1 color="#7D00FF">Software Engineer.</H1>
        <P>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </P>
      </Div>
      <Div w="870px" h="974px">
        <ImageContainer></ImageContainer>
      </Div>
    </HeaderStyle>
  );
};
