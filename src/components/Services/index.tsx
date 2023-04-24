import { H1, H1Expertise, ImgServices, P, PExpertise } from "@/styles/Style";
import { Button } from "../Button";
import {
  DivExpertise,
  DivExpertisePart,
  ServicesDivPhoto,
  ServicesDivText,
  ServicesStyle,
} from "@/styles/services.style";
import { CgArrowRight } from "react-icons/cg";

export const Services = () => {
  const mock = [
    { name: "ABOUT", id: "header-style" },
    { name: "SERVICES", id: "services-style" },
    { name: "WORKS", id: "works-style" },
    { name: "CONTACT", id: "contact-style" },
  ];

  return (
    <ServicesStyle id="services-style">
      <ServicesDivPhoto>
        <ImgServices></ImgServices>
      </ServicesDivPhoto>
      <ServicesDivText>
        <H1>Software Engineer and</H1>
        <H1>Infrastructure specialist</H1>
        <H1>based in Brazil</H1>
        <P>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </P>
        <DivExpertise>
          <DivExpertisePart>
            <H1Expertise>17+</H1Expertise>
            <PExpertise>Years of Experience</PExpertise>
          </DivExpertisePart>
          <DivExpertisePart>
            <H1Expertise>325+</H1Expertise>
            <PExpertise>Completed Projects</PExpertise>
          </DivExpertisePart>
        </DivExpertise>
        <Button bgColor="#7D00FF" fontColor="#fff">
          SAY HI <CgArrowRight />
        </Button>
      </ServicesDivText>
    </ServicesStyle>
  );
};
