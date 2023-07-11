import { AllCharactersQuery } from "@/gql/graphql";

export type CharacterListPaginationProps = {
  page: number;
  onPageChange: (newPage: number) => void;
} & Exclude<AllCharactersQuery["characters"], null>["info"];
