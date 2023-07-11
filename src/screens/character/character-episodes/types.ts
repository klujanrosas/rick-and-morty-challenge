import { CharacterDetailsQuery } from "@/gql/graphql";

export interface CharacterEpisodesProps {
  character: CharacterDetailsQuery["character"];
}

export interface OtherCharactersInEpisodeProps {
  episodeId: string;
}
