import { graphql } from "@/gql";

export const allCharactersQueryDocument = graphql(`
  query AllCharacters($page: Int) {
    characters(page: $page) {
      results {
        ...CharacterFragment
      }
      info {
        count
        pages
        next
        prev
      }
    }
  }
`);
