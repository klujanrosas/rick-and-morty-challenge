import { useQuery } from "@tanstack/react-query";

import { client } from "../client";
import { allCharactersQueryDocument } from "../queries/characters";

export function useCharacters() {
  return useQuery({
    queryKey: ["all-characters"],
    queryFn: () => {
      return client.request(allCharactersQueryDocument);
    },
  });
}
