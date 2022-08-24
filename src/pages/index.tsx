import type { NextPage } from "next";
import Head from "next/head";
import { DarkModeToggle } from "../components/home/DarkModeToggle";
import { LinkInput } from "../components/home/LinkInput";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mysliwiec.me - shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-screen gap-4 w-3/4 mx-auto">
        <div className="absolute top-8 right-8">
          <DarkModeToggle />
        </div>
        <h1 className="text-[2.5rem] md:text-[3rem] leading-tight text-center font-bold mb-8 text-black dark:text-white">
          shorten your <span className="text-teal-400">link</span>
        </h1>
        <LinkInput />
      </main>
    </>
  );
};

export default Home;
