import { useQuery } from '@tanstack/react-query';

export interface AudioDbAlbum {
  idAlbum: string;
  strAlbum: string;
  strArtist: string;
  strAlbumThumb: string;
}

const getAudioDbAlbums = async (): Promise<AudioDbAlbum[]> => {
  try {
    const response = await fetch(
      'https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024',
    );

    const json = await response.json();
    return json.album ?? [];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function useGetAudioDbAlbums() {
  return useQuery<AudioDbAlbum[], Error>({
    queryKey: ['audio-db-albums'],
    queryFn: () => getAudioDbAlbums(),
  });
}
