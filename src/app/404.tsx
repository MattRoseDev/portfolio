import type { NextPage } from "next";
import Head from "next/head";
import { NotFound } from "@/features/NotFound";

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <NotFound />
    </>
  );
};

export default NotFoundPage;
