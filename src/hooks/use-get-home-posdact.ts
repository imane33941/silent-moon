import { useQuery } from '@tanstack/react-query';

export interface ITunesPodcast {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl600: string;
  collectionName: string;
  primaryGenreName: string;
  trackCount: number;
  kind: 'podcast';
}

const getITunesPodcasts = async (): Promise<ITunesPodcast[]> => {
  try {
    const response = await fetch(
      'https://itunes.apple.com/search?term=meditation&media=podcast&entity=podcast&country=FR&lang=fr_fr',
    );

    const json = await response.json();
    return json.results ?? [];
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useGetMeditationPodcasts() {
  return useQuery<ITunesPodcast[], Error>({
    queryKey: ['meditation-podcasts'],
    queryFn: () => getITunesPodcasts(),
  });
}
