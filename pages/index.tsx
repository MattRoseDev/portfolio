import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "@features/Home";
import { Layout } from "src/components/Layout";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mahdi.Codes</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
