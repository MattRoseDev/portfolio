import Head from "next/head";
import { Home } from "@features/Home";
import { Layout } from "src/components/Layout";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>&gt; mahdineer</title>
      </Head>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default HomePage;
