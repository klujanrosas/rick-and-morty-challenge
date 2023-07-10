import { graphql } from "@/gql";

export const allCharactersQueryDocument = graphql(`
  query AllCharacters {
    characters {
      results {
        id
        gender
        name
        image
        status
        species
        episode {
          id
          name
        }
        location {
          id
          name
        }
      }
    }
  }
`);
