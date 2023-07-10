import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: [
    "src/**/*.tsx",
    "src/**/*.graphql",
    "src/graphql/mutations/*.ts",
    "src/graphql/queries/*.ts",
  ],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        avoidOptionals: true,
        dedupeFragments: true,
        namingConvention: "keep",
        skipTypename: true,
      },
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;
