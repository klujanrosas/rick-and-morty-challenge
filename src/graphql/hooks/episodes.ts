import { useQuery } from "@tanstack/react-query";
import { client } from "../client";
import {
  episodeDetailsQueryDocument,
  episodesByIdsQueryDocument,
} from "../queries/episodes";

export function useEpisodesByIds(ids: string[]) {
  return useQuery({
    queryKey: ["episodes-by-ids", ...ids],
    queryFn: async () => {
      return client.request(episodesByIdsQueryDocument, { ids });
    },
  });
}

export function useEpisode(id: string) {
  return useQuery({
    queryKey: ["episode-by-id", id],
    queryFn: async () => {
      return client.request(episodeDetailsQueryDocument, { episodeId: id });
    },
    enabled: Boolean(id),
  });
}
