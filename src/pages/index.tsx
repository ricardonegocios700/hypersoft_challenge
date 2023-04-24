import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import Head from "next/head";

export default function Home() {
  const navBarValues = ["ABOUT", "SERVICES", "WORKS", "CONTACT"];

  return (
    <>
      <Head>
        <title>Hypersoft challenge</title>
      </Head>

      <main>
        <Header />
        <Services />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione esse
          repellendus explicabo reiciendis, mollitia cumque quaerat quidem
          accusantium ad maxime magni, distinctio modi porro repellat quis.
          Ipsam earum quis rem!
        </p>
      </main>
    </>
  );
}
