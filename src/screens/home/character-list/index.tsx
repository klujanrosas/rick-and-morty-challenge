import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { CharacterListItemProps, CharacterListProps } from "./types";
import Link from "next/link";

export function CharacterListItem({ character }: CharacterListItemProps) {
  if (!character) return null;

  return (
    <Link href={`/character/${character.id}`} legacyBehavior passHref>
      <Card
        key={character.id}
        cursor="pointer"
        flexBasis={["100%", null, null, null, "49%"]}
        _hover={{
          boxShadow: "0 0 0 1px #000000",
        }}
        as="a"
      >
        <CardHeader>
          <Flex gap={4}>
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              {character.image && (
                <Avatar
                  size="xl"
                  name={character.name ?? ""}
                  src={character.image ?? ""}
                />
              )}

              <Box>
                <Heading size="sm">{character.name}</Heading>
                <Text>Status: {character.status}</Text>
                <Text>
                  Location: {character.location?.name ?? "Location Unknown"}
                </Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
      </Card>
    </Link>
  );
}

export function CharacterList({ isLoading, characters }: CharacterListProps) {
  if (isLoading) {
    return <Spinner data-testid="character-list-spinner" />;
  }

  if (!characters.length) {
    return <Text data-testid="character-list-empty">No characters found</Text>;
  }

  return (
    <Flex
      rowGap="24px"
      columnGap="24px"
      justifyContent="space-between"
      width="100%"
      direction="row"
      flexWrap="wrap"
    >
      {characters?.map((character) => (
        <CharacterListItem key={character?.id} character={character} />
      ))}
    </Flex>
  );
}
