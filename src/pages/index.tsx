import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import Head from "next/head";
import { DarkModeToggle } from "../components/home/DarkModeToggle";
import { trpc } from "../utils/trpc";
import * as Yup from "yup";
import { Input } from "../components/home/Input";
import { Button } from "../components/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>mysliwiec.me - shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex h-screen w-3/4 flex-col items-center justify-center gap-4">
        <div className="absolute top-8 right-8">
          <DarkModeToggle />
        </div>
        <h1 className="mb-8 text-center text-[2.5rem] font-bold leading-tight text-black dark:text-white md:text-[3rem]">
          shorten your <span className="text-teal-400">link</span>
        </h1>
        <Formik
          initialValues={{ url: "", slug: "" }}
          validationSchema={Yup.object({
            url: Yup.string().url().required("URL is required"),
            slug: Yup.string().required(),
          })}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            console.log(values);
            return;
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form className="flex w-full flex-col gap-6">
              <Input name="url" id="url" type="url" label="your full url" />
              <Input
                name="slug"
                id="slug"
                type="text"
                prefix="https://sh.mysliwiec.me/s/"
                suffix={
                  <Button size="small" variant="secondary">
                    Randomize
                  </Button>
                }
                label="your new link's slug"
              />
              <Button type="submit">Create</Button>
            </Form>
          )}
        </Formik>
        {/* <LinkInput onSubmit={handleSubmit} /> */}
      </main>
    </>
  );
};

export default Home;
