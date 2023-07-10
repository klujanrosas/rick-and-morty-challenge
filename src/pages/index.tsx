import Head from "next/head";

import { HomeScreen } from "@/screens/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty Challenge</title>
        <meta name="description" content="Rick and Morty Challenge App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeScreen />
    </>
  );
}
