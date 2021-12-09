import Head from "next/head";
import { Home } from "@features/Home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Favecode</title>
      </Head>

      <Home />
    </>
  );
};

export default HomePage;
