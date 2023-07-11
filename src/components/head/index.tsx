import NextHead from "next/head";

import { HeadProps } from "./types";

export function Head({ children }: HeadProps) {
  return (
    <NextHead>
      <meta name="description" content="Rick and Morty Challenge App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      {children ? children : <title>Rick and Morty Challenge</title>}
    </NextHead>
  );
}
