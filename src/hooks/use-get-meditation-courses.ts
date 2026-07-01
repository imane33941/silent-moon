import { useQuery } from "@tanstack/react-query";

const BASE_URL = 'https://itunes.apple.com/search?term=meditation&media=podcast&entity=podcast&country=FR&lang=fr_fr';
type ItunesPodcast = {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl600: string;
    collectionName: string;
    primaryGenreName: string;
    trackCount: number;
    kind: 'podcast';
}
export type MeditationCourse = {
    id: string;
    title: string;
    image?: string | null;
    height: number;
};

async function fetchMeditationCourses(): Promise<MeditationCourse[]> {

    try {
        const response = await fetch(`${BASE_URL}`)
        const data = await response.json();

        const heights = [210, 167, 167, 210]
        return (data.results ?? []).slice(0, 6).map((track: ItunesPodcast, index: number) => ({
            id: track.trackId.toString(),
            title: track.trackName,
            image: track.artworkUrl600 ? `${track.artworkUrl600}/medium` : null,
            height: heights[index] ?? 167,
        }));

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export function useGetMeditationCourses() {
    return useQuery(
        {
            queryKey: ["meditation-courses"],
            queryFn: () => fetchMeditationCourses()
        }

    )
}
