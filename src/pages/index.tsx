import type { NextPage } from "next";
import Head from "next/head";
import { LinkInput } from "../components/home/link-input";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mysliwiec.me - shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen bg-neutral-900 min-h-screen flex flex-col justify-center items-center relative">
        <h1 className="text-white font-bold text-[3rem] select-none mb-16">
          — shorten your <span className="text-lime-400 ">link</span> —
        </h1>

        <LinkInput />
      </main>
    </>
  );
};

export default Home;
