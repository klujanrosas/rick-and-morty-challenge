import { graphql } from "@/gql";

export const allCharactersQueryDocument = graphql(`
  query AllCharacters {
    characters {
      results {
        ...CharacterFragment
      }
    }
  }
`);
