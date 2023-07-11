import { useRouter } from "next/router";
import { Divider, Heading, Spinner } from "@chakra-ui/react";

import { useCharacter } from "@/graphql/hooks/character";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Head } from "@/components/head";

import { CharacterDetails } from "./character-details";
import { CharacterEpisodes } from "./character-episodes";

export function CharacterScreen() {
  const router = useRouter();
  const { characterId } = router.query;
  const { data, isLoading } = useCharacter(characterId as string);

  return (
    <>
      <Navigation />
      {isLoading ? (
        <main>
          <Spinner />
        </main>
      ) : (
        <>
          <Head>
            <title>{`Rick and Morty Challenge | ${data?.character?.name}`}</title>
          </Head>
          <main>
            <Heading as="h3" mb={6}>
              {data?.character?.name}
            </Heading>
            <CharacterDetails character={data?.character ?? null} />
            <Divider my={4} />
            <CharacterEpisodes character={data?.character ?? null} />
          </main>
        </>
      )}
      <Footer />
    </>
  );
}
