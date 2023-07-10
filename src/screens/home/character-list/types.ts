import {
  AllCharactersQuery,
  Character,
  Characters,
  Maybe,
} from "@/gql/graphql";

export interface CharacterListProps {
  isLoading: Boolean;
  characters: Exclude<
    Exclude<AllCharactersQuery["characters"], null>["results"],
    null
  >;
}

export interface CharacterListItemProps {
  character: CharacterListProps["characters"][number];
}
