/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

export type Character = {
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>;
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']['output']>;
  /** The id of the character. */
  id: Maybe<Scalars['ID']['output']>;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']['output']>;
  /** The character's last known location */
  location: Maybe<Location>;
  /** The name of the character. */
  name: Maybe<Scalars['String']['output']>;
  /** The character's origin location */
  origin: Maybe<Location>;
  /** The species of the character. */
  species: Maybe<Scalars['String']['output']>;
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']['output']>;
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']['output']>;
};

export type Characters = {
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Character>>>;
};

export type Episode = {
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']['output']>;
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>;
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** The code of the episode. */
  episode: Maybe<Scalars['String']['output']>;
  /** The id of the episode. */
  id: Maybe<Scalars['ID']['output']>;
  /** The name of the episode. */
  name: Maybe<Scalars['String']['output']>;
};

export type Episodes = {
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Episode>>>;
};

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  species: InputMaybe<Scalars['String']['input']>;
  status: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  type: InputMaybe<Scalars['String']['input']>;
};

export type Info = {
  /** The length of the response. */
  count: Maybe<Scalars['Int']['output']>;
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']['output']>;
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']['output']>;
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']['output']>;
};

export type Location = {
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']['output']>;
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']['output']>;
  /** The id of the location. */
  id: Maybe<Scalars['ID']['output']>;
  /** The name of the location. */
  name: Maybe<Scalars['String']['output']>;
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>;
  /** The type of the location. */
  type: Maybe<Scalars['String']['output']>;
};

export type Locations = {
  info: Maybe<Info>;
  results: Maybe<Array<Maybe<Location>>>;
};

export type Query = {
  /** Get a specific character by ID */
  character: Maybe<Character>;
  /** Get the list of all characters */
  characters: Maybe<Characters>;
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<Character>>>;
  /** Get a specific episode by ID */
  episode: Maybe<Episode>;
  /** Get the list of all episodes */
  episodes: Maybe<Episodes>;
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<Episode>>>;
  /** Get a specific locations by ID */
  location: Maybe<Location>;
  /** Get the list of all locations */
  locations: Maybe<Locations>;
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<Location>>>;
};


export type QuerycharacterArgs = {
  id: Scalars['ID']['input'];
};


export type QuerycharactersArgs = {
  filter: InputMaybe<FilterCharacter>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QuerycharactersByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QueryepisodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryepisodesArgs = {
  filter: InputMaybe<FilterEpisode>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QueryepisodesByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QuerylocationArgs = {
  id: Scalars['ID']['input'];
};


export type QuerylocationsArgs = {
  filter: InputMaybe<FilterLocation>;
  page: InputMaybe<Scalars['Int']['input']>;
};


export type QuerylocationsByIdsArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type CharacterFragmentFragment = { id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null };

export type CharacterDetailsQueryVariables = Exact<{
  characterId: Scalars['ID']['input'];
}>;


export type CharacterDetailsQuery = { character: { id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null } | null };

export type AllCharactersQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  filter: InputMaybe<FilterCharacter>;
}>;


export type AllCharactersQuery = { characters: { results: Array<{ id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null } | null> | null, info: { count: number | null, pages: number | null, next: number | null, prev: number | null } | null } | null };

export type EpisodeFragmentFragment = { id: string | null, name: string | null, air_date: string | null, characters: Array<{ id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null } | null> };

export type EpisodesByIdsQueryVariables = Exact<{
  ids: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type EpisodesByIdsQuery = { episodesByIds: Array<{ id: string | null, name: string | null, air_date: string | null, characters: Array<{ id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null } | null> } | null> | null };

export type EpisodeDetailsQueryVariables = Exact<{
  episodeId: Scalars['ID']['input'];
}>;


export type EpisodeDetailsQuery = { episode: { id: string | null, name: string | null, air_date: string | null, characters: Array<{ id: string | null, gender: string | null, name: string | null, image: string | null, status: string | null, species: string | null, episode: Array<{ id: string | null, name: string | null } | null>, location: { id: string | null, name: string | null } | null } | null> } | null };

export const CharacterFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CharacterFragmentFragment, unknown>;
export const EpisodeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"air_date"}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<EpisodeFragmentFragment, unknown>;
export const CharacterDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CharacterDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"character"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"characterId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CharacterDetailsQuery, CharacterDetailsQueryVariables>;
export const AllCharactersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllCharacters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FilterCharacter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"info"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"next"}},{"kind":"Field","name":{"kind":"Name","value":"prev"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<AllCharactersQuery, AllCharactersQueryVariables>;
export const EpisodesByIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EpisodesByIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episodesByIds"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"air_date"}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFragment"}}]}}]}}]} as unknown as DocumentNode<EpisodesByIdsQuery, EpisodesByIdsQueryVariables>;
export const EpisodeDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EpisodeDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"episode"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"episodeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"species"}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"air_date"}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFragment"}}]}}]}}]} as unknown as DocumentNode<EpisodeDetailsQuery, EpisodeDetailsQueryVariables>;