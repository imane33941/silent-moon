import { useGetPodcastById } from '@/hooks/use-get-podcast-by-id';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function formatDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes} MIN`;
}

export default function PodcastDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { data, isLoading, isError } = useGetPodcastById(id);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#8E97FD" />
      </View>
    );
  }

  if (isError || !data?.podcast) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-[#A1A4B2]">Impossible de charger le podcast.</Text>
      </View>
    );
  }

  const { podcast, episodes } = data;

  return (
    <ScrollView className="flex-1 bg-white" showsVerticalScrollIndicator={false}>
      <View className="relative">
        <Image
          source={{ uri: podcast.artworkUrl600 }}
          className="w-full h-[280px]"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />

        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute left-4 top-4 h-[40px] w-[40px] items-center justify-center rounded-full bg-white"
          style={{ top: insets.top + 12 }}
        >
          <Ionicons name="arrow-back" size={20} color="#3F414E" />
        </TouchableOpacity>

        <View
          className="absolute right-4 flex-row gap-3"
          style={{ top: insets.top + 12 }}
        >
          <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-full bg-white/80">
            <Ionicons name="heart-outline" size={20} color="#3F414E" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[40px] w-[40px] items-center justify-center rounded-full bg-white/80">
            <Ionicons name="download-outline" size={20} color="#3F414E" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-6 pt-6">
        <Text className="text-[28px] font-bold text-[#3F414E]">{podcast.collectionName}</Text>
        <Text className="mt-1 text-[12px] font-semibold tracking-widest text-[#A1A4B2]">
          PODCAST
        </Text>

        <Text className="mt-4 text-[14px] leading-6 text-[#A1A4B2]">
          {podcast.primaryGenreName} • {podcast.artistName}
        </Text>

        <View className="mt-5 flex-row gap-6">
          <View className="flex-row items-center gap-2">
            <Ionicons name="layers-outline" size={16} color="#F45D6A" />
            <Text className="text-[12px] font-bold text-[#3F414E]">
              {podcast.trackCount} épisodes
            </Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Ionicons name="headset" size={16} color="#8E97FD" />
            <Text className="text-[12px] font-bold text-[#3F414E]">
              {podcast.primaryGenreName}
            </Text>
          </View>
        </View>

        <Text className="mt-8 text-[18px] font-bold text-[#3F414E]">Épisodes</Text>

        <View className="mt-4 mb-10">
          {episodes.length === 0 ? (
            <Text className="text-[#A1A4B2]">Aucun épisode disponible.</Text>
          ) : (
            episodes.map((episode, index) => (
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/music-player",
                    params: {
                      title: episode.trackName,
                      subtitle: podcast.collectionName,
                    },
                  })
                }
                key={episode.trackId}
                className="mb-4 flex-row items-center gap-4"
              >
                <View
                  className={`h-[50px] w-[50px] items-center justify-center rounded-full ${index === 0 ? 'bg-[#8E97FD]' : 'bg-white border border-[#EBEAEC]'
                    }`}
                >
                  <Ionicons
                    name="play"
                    size={18}
                    color={index === 0 ? 'white' : '#3F414E'}
                  />
                </View>


                <View className="flex-1">
                  <Text className="text-[16px] font-semibold text-[#3F414E]" numberOfLines={1}>
                    {episode.trackName}
                  </Text>
                  <Text className="mt-1 text-[12px] text-[#A1A4B2]">
                    {episode.trackTimeMillis ? formatDuration(episode.trackTimeMillis) : 'N/A'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </ScrollView>
  );
}