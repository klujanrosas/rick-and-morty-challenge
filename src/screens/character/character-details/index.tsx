import { Avatar, Flex, chakra } from "@chakra-ui/react";

import { omit } from "@/utils/omit";
import { capitalize } from "@/utils/capitalize";

import { CharacterDetailsProps } from "./types";

export function CharacterDetails({ character }: CharacterDetailsProps) {
  if (!character) return null;

  const characterRawDetails = omit(character, [
    "location",
    "episode",
    "id",
    "image",
    "name",
  ]);

  return (
    <chakra.section display="flex" flexDirection="column" gap="24px">
      <Flex gap={8} alignItems="center">
        {character?.image && (
          <Avatar
            name={character?.name ?? ""}
            src={character?.image}
            size="2xl"
          />
        )}
        <Flex direction="column" gap={2}>
          {Object.keys(characterRawDetails).map((key) => {
            return (
              <div key={key}>
                <strong>{capitalize(key)}</strong>:{" "}
                {character[key as keyof typeof characterRawDetails]}
              </div>
            );
          })}
          <div>
            <strong>Location: </strong>
            {character.location?.name}
          </div>
        </Flex>
      </Flex>
    </chakra.section>
  );
}
