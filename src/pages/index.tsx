import type { NextPage } from "next";
import Head from "next/head";
import { LinkInput } from "../components/home/LinkInput";
import { useDarkMode } from "../contexts/darkModeContext";

const Home: NextPage = () => {
  const { toggleMode } = useDarkMode();

  return (
    <>
      <Head>
        <title>mysliwiec.me - shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center h-screen gap-4 w-1/3 mx-auto">
        <button
          onClick={toggleMode}
          className="absolute top-8 left-8 dark:text-white"
        >
          Toggle Dark Mode
        </button>
        <h1 className="text-[3rem] font-bold mb-8 text-black dark:text-white">
          shorten your <span className="text-teal-400">link</span>
        </h1>
        <LinkInput />
      </main>
    </>
  );
};

export default Home;
