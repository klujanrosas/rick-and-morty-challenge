import { useQuery } from "@tanstack/react-query";

import { client } from "../client";
import { allCharactersQueryDocument } from "../queries/characters";
import { AllCharactersQueryVariables } from "@/gql/graphql";

export function useCharacters(variables: AllCharactersQueryVariables) {
  return useQuery({
    queryKey: ["all-characters", variables],
    queryFn: () => {
      return client.request(allCharactersQueryDocument, variables);
    },
    keepPreviousData: true,
    enabled: !!variables.page && variables.page > 0,
  });
}
