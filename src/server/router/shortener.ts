import { z } from "zod";
import { createRouter } from "./context";

export const shortenerRouter = createRouter().mutation("create-short-url", {
  input: z.object({ url: z.string().url() }),
  async resolve({ input, ctx }) {
    const { url } = input;

    return ctx.prisma.link.create({
      data: {
        url,
        slug: "test",
      },
    });
  },
});
