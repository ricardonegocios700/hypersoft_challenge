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
      </main>
    </>
  );
}
