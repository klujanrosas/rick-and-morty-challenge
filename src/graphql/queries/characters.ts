import { graphql } from "@/gql";

export const allCharactersQueryDocument = graphql(`
  query AllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
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
