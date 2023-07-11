import clsx from "clsx";
import { Inter } from "next/font/google";
import { Heading } from "@chakra-ui/react";

import { useCharacters } from "@/graphql/hooks/characters";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Head } from "@/components/head";

import { CharacterList } from "./character-list";

import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export function HomeScreen() {
  const { data, isLoading } = useCharacters();

  return (
    <>
      <Head />
      <Navigation />
      <main className={clsx(styles.main, inter.className)}>
        <Heading as="h3" mb={6}>
          Rick and Morty Characters
        </Heading>

        <CharacterList
          characters={data?.characters?.results ?? []}
          isLoading={isLoading}
        />
      </main>
      <Footer />
    </>
  );
}
