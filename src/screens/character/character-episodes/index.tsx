import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Card,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { useEpisode } from "@/graphql/hooks/episodes";

import { CharacterEpisodesProps, OtherCharactersInEpisodeProps } from "./types";

function OtherCharactersInEpisode({
  episodeId,
}: OtherCharactersInEpisodeProps) {
  const { data, isLoading } = useEpisode(episodeId);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Text fontStyle="italic">Other characters in this episode:</Text>
      <Flex gap="24px" flexWrap="wrap">
        {data?.episode?.characters?.map((character) => {
          if (!character) return null;
          return (
            <Link href={`/character/${character.id}`} key={character.id}>
              <Card key={character.id} cursor="pointer" as="a">
                {character.image && (
                  <Image
                    src={character.image}
                    width={100}
                    height={100}
                    alt={`${character.name}'s avatar`}
                  />
                )}
              </Card>
            </Link>
          );
        })}
      </Flex>
    </>
  );
}

export function CharacterEpisodes({ character }: CharacterEpisodesProps) {
  return (
    <section>
      <Flex direction="column" gap="24px">
        <Heading as="h4">Appears in:</Heading>
        <Accordion>
          {character?.episode?.map((episode) => {
            if (!episode) return null;

            return (
              <AccordionItem key={episode.id}>
                {({ isExpanded }) => {
                  return (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1" textAlign="left">
                            <Text>
                              <strong>Ep.{episode.id}</strong>: {episode.name}
                            </Text>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel>
                        {isExpanded && (
                          <OtherCharactersInEpisode episodeId={episode.id!} />
                        )}
                      </AccordionPanel>
                    </>
                  );
                }}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </section>
  );
}
