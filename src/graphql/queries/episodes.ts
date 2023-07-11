import { graphql } from "@/gql";

export const episodeFragment = graphql(`
  fragment EpisodeFragment on Episode {
    id
    name
    air_date
    characters {
      ...CharacterFragment
    }
  }
`);

export const episodesByIdsQueryDocument = graphql(`
  query EpisodesByIds($ids: [ID!]!) {
    episodesByIds(ids: $ids) {
      ...EpisodeFragment
    }
  }
`);

export const episodeDetailsQueryDocument = graphql(`
  query EpisodeDetails($episodeId: ID!) {
    episode(id: $episodeId) {
      ...EpisodeFragment
    }
  }
`);
