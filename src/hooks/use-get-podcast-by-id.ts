import { useQuery } from "@tanstack/react-query";

export interface ITunesEpisode {
  trackId: number;
  trackName: string;
  description: string;
  trackTimeMillis: number;
  releaseDate: string;
  episodeUrl: string;
  artworkUrl160: string;
  kind: 'podcast-episode';
}

export interface ITunesPodcastDetail {
  collectionId: number;
  collectionName: string;
  artistName: string;
  artworkUrl600: string;
  primaryGenreName: string;
  trackCount: number;
  description?: string;
}

interface ITunesLookupResult {
  podcast: ITunesPodcastDetail;
  episodes: ITunesEpisode[];
}

const getPodcastById = async (id: string): Promise<ITunesLookupResult> => {
  const response = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=20`
  );
  const json = await response.json();
  const results = json.results ?? [];
  const podcast = results.find((r: any) => r.kind === 'podcast' || r.wrapperType === 'collection');
  const episodes = results.filter((r: any) => r.kind === 'podcast-episode');
  return { podcast, episodes };
};

export function useGetPodcastById(id: string) {
  return useQuery<ITunesLookupResult, Error>({
    queryKey: ["podcast", id],
    queryFn: () => getPodcastById(id),
    enabled: Boolean(id),
  });
}