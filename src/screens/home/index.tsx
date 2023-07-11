import clsx from "clsx";
import { Inter } from "next/font/google";
import { Divider, Heading, Spinner } from "@chakra-ui/react";

import { useCharacters } from "@/graphql/hooks/characters";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Head } from "@/components/head";

import { CharacterList } from "./character-list";

import styles from "./styles.module.scss";
import { CharacterListPagination } from "./character-list-pagination";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export function HomeScreen() {
  const router = useRouter();
  const [page, setPage] = useState(-1);
  const { data, isLoading, isPreviousData } = useCharacters({
    page,
  });

  function _setPage(newPage: number) {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
    setPage(newPage);
  }

  useEffect(() => {
    if (router.isReady) {
      setPage(Number(router.query.page || 1));
    }
  }, [router.isReady, router.query.page]);

  return (
    <>
      <Head />
      <Navigation />
      <main className={clsx(styles.main, inter.className)}>
        <Heading as="h3" mb={6}>
          Rick and Morty Characters
        </Heading>

        {data?.characters?.info && (
          <CharacterListPagination
            page={page}
            onPageChange={_setPage}
            {...data.characters.info}
          />
        )}

        <Divider my={4} />

        {isPreviousData ? (
          <Spinner />
        ) : (
          <CharacterList
            characters={data?.characters?.results ?? []}
            isLoading={isLoading}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
