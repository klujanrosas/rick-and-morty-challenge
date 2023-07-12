import clsx from "clsx";
import { Inter } from "next/font/google";
import { Divider, Flex, Heading, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useCharacters } from "@/graphql/hooks/characters";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Head } from "@/components/head";

import { CharacterSearchbar } from "./character-searchbar";
import { CharacterList } from "./character-list";
import { CharacterListPagination } from "./character-list-pagination";

import styles from "./styles.module.scss";

const inter = Inter({ subsets: ["latin"] });

export function HomeScreen() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const search = router.query.search ? String(router.query.search) : null;

  const { data, isLoading, isPreviousData } = useCharacters({
    page,
    filter: {
      name: search,
      // TODO: implement search with other attributes in the future
      gender: null,
      species: null,
      status: null,
      type: null,
    },
  });

  function _setPage(newPage: number) {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  }

  function _setSearch(newSearch: string) {
    router.replace({
      pathname: router.pathname,
      query: { page: 1, search: newSearch },
    });
  }

  return (
    <>
      <Head />
      <Navigation />
      <main className={clsx(styles.main, inter.className)}>
        <Heading as="h3" mb={6}>
          Rick and Morty Characters
        </Heading>

        <Flex w="100%" justifyContent="space-between">
          <CharacterSearchbar
            onChange={(e) => {
              _setSearch(e.target.value);
            }}
            value={search ?? ""}
          />

          {data?.characters?.info &&
            (data?.characters?.info?.count ?? 0) > 0 && (
              <CharacterListPagination
                page={page}
                onPageChange={_setPage}
                {...data.characters.info}
              />
            )}
        </Flex>

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
