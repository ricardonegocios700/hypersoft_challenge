import dribble from "../../../public/dribbble-logo.png";
import behance from "../../../public/behance.png";
import facebook from "../../../public/facebook.png";
import twitter from "../../../public/twitter.png";
import styled from "styled-components";
import { Button } from "../Button";
import Image from "next/image";

export const FollowMe = () => {
  const mock = [
    { name: "DRIBBBLE", image: dribble, color: "#ffffff", href: "#/link_dribble" },
    { name: "BEHANCE", image: behance, color: "#7D00FF", href: "#/link_behance" },
    {
      name: "FACEBOOK",
      image: facebook,
      color: "#ffffff",
      href: "#/link_facebook",
    },
    { name: "TWITTER", image: twitter, color: "#ffffff", href: "#/link_twitter" },
  ];

  const Container = styled.div`
    margin-top: 150px;
    font-size: 25px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <Container>
      <p>Follow me on</p>
      <div>
        {mock.map((i, k) => (
          <Button key={k} bgColor={i.color}>
            <a href={i.href}>
              <Image src={i.image} alt={i.name}></Image>
            </a>
          </Button>
        ))}
      </div>
    </Container>
  );
};
