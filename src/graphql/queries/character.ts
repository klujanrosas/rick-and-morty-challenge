import { graphql } from "@/gql";

export const characterFragment = graphql(`
  fragment CharacterFragment on Character {
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
`);

export const characterDetailsQueryDocument = graphql(`
  query CharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      ...CharacterFragment
    }
  }
`);
