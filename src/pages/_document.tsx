import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-white selection:bg-teal-400 selection:text-white dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
