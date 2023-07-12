/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment CharacterFragment on Character {\n    id\n    gender\n    name\n    image\n    status\n    species\n    episode {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n": types.CharacterFragmentFragmentDoc,
    "\n  query CharacterDetails($characterId: ID!) {\n    character(id: $characterId) {\n      ...CharacterFragment\n    }\n  }\n": types.CharacterDetailsDocument,
    "\n  query AllCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      results {\n        ...CharacterFragment\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n": types.AllCharactersDocument,
    "\n  fragment EpisodeFragment on Episode {\n    id\n    name\n    air_date\n    characters {\n      ...CharacterFragment\n    }\n  }\n": types.EpisodeFragmentFragmentDoc,
    "\n  query EpisodesByIds($ids: [ID!]!) {\n    episodesByIds(ids: $ids) {\n      ...EpisodeFragment\n    }\n  }\n": types.EpisodesByIdsDocument,
    "\n  query EpisodeDetails($episodeId: ID!) {\n    episode(id: $episodeId) {\n      ...EpisodeFragment\n    }\n  }\n": types.EpisodeDetailsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CharacterFragment on Character {\n    id\n    gender\n    name\n    image\n    status\n    species\n    episode {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  fragment CharacterFragment on Character {\n    id\n    gender\n    name\n    image\n    status\n    species\n    episode {\n      id\n      name\n    }\n    location {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CharacterDetails($characterId: ID!) {\n    character(id: $characterId) {\n      ...CharacterFragment\n    }\n  }\n"): (typeof documents)["\n  query CharacterDetails($characterId: ID!) {\n    character(id: $characterId) {\n      ...CharacterFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      results {\n        ...CharacterFragment\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllCharacters($page: Int, $filter: FilterCharacter) {\n    characters(page: $page, filter: $filter) {\n      results {\n        ...CharacterFragment\n      }\n      info {\n        count\n        pages\n        next\n        prev\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EpisodeFragment on Episode {\n    id\n    name\n    air_date\n    characters {\n      ...CharacterFragment\n    }\n  }\n"): (typeof documents)["\n  fragment EpisodeFragment on Episode {\n    id\n    name\n    air_date\n    characters {\n      ...CharacterFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EpisodesByIds($ids: [ID!]!) {\n    episodesByIds(ids: $ids) {\n      ...EpisodeFragment\n    }\n  }\n"): (typeof documents)["\n  query EpisodesByIds($ids: [ID!]!) {\n    episodesByIds(ids: $ids) {\n      ...EpisodeFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query EpisodeDetails($episodeId: ID!) {\n    episode(id: $episodeId) {\n      ...EpisodeFragment\n    }\n  }\n"): (typeof documents)["\n  query EpisodeDetails($episodeId: ID!) {\n    episode(id: $episodeId) {\n      ...EpisodeFragment\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;