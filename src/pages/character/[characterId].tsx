import { useRouter } from "next/router";

import { useCharacter } from "@/graphql/hooks/character";
import { Heading } from "@chakra-ui/react";
import { Footer } from "@/components/footer";

export default function CharacterDetailsScreen() {
  const router = useRouter();
  const { characterId } = router.query;
  const { data, isLoading } = useCharacter(characterId as string);

  return (
    <>
      <main>
        <Heading as="h3" mb={6}>
          Character Details
        </Heading>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
      <Footer />
    </>
  );
}
