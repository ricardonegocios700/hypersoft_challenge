import { Header } from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hypersoft challenge</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  );
}
