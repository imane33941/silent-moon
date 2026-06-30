import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://www.theaudiodb.com/api/v1/json/2/album.php?i=112024";
type AudioDbAlbum = {
    idAlbum?: string;
    strAlbum: string;
    strAlbumThumb?: string | null;
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
        return (data.album ?? []).slice(0, 6).map((track: AudioDbAlbum, index: number) => ({
            id: track.idAlbum ?? track.strAlbum ?? `${index}`,
            title: track.strAlbum,
            image: track.strAlbumThumb ? `${track.strAlbumThumb}/medium` : null,
            height: heights[index] ?? 167,
        }));

    } catch (error) {
        console.log(error);
        throw error;
    }

}

export function useMeditationCourses() {
    return useQuery(
        {
            queryKey: ["meditation-courses"],
            queryFn: () => fetchMeditationCourses()
        }

    )
}
