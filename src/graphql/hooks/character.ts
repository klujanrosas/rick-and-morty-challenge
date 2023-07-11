import { useQuery } from "@tanstack/react-query";

import { client } from "../client";
import { characterDetailsQueryDocument } from "../queries/character";

export function useCharacter(characterId: string) {
  return useQuery({
    queryKey: ["character-details", characterId],
    queryFn: () => {
      return client.request(characterDetailsQueryDocument, {
        characterId,
      });
    },
    enabled: Boolean(characterId),
  });
}
