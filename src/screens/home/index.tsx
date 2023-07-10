import clsx from "clsx";
import { Inter } from "next/font/google";
import { Heading } from "@chakra-ui/react";

import { Footer } from "@/components/footer";

import { CharacterList } from "./character-list";

import styles from "./styles.module.scss";
import { useCharacters } from "@/graphql/hooks/characters";

const inter = Inter({ subsets: ["latin"] });

export function HomeScreen() {
  const { data, isLoading } = useCharacters();

  return (
    <>
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
