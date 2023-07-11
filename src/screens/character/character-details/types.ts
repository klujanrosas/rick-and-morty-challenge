import type { CharacterDetailsQuery } from "@/gql/graphql";

export interface CharacterDetailsProps {
  character: CharacterDetailsQuery["character"];
}
