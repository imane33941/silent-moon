import { useAsyncStorage } from '@/hooks/use-async-storage';
import { useGetMeditationPodcasts } from '@/hooks/use-get-home-posdact';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HomePage() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [onboardingCompleted, _, onboardingCompletedLoading] = useAsyncStorage(
    'onboardingCompleted',
    false,
  );

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
    setShowLoading(false);
  }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const { data, refetch, isRefetching, isLoading, isError, error } = useGetMeditationPodcasts();

  const recommendations = data?.slice(0, 11) ?? [];

  useFocusEffect(
    useCallback(() => {
      if (!onboardingCompleted && !onboardingCompletedLoading) {
        router.replace('/onboarding');
      }
    }, [onboardingCompleted, onboardingCompletedLoading]),
  );

if (isError && !data) {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <View className="h-[120px] w-[120px] items-center justify-center rounded-full bg-[#FFF3F0]">
        <Ionicons name="cloud-offline-outline" size={46} color="#EB5757" />
      </View>

      <Text className="mt-8 text-center text-[22px] font-bold text-[#3F414E]">
        Oups, une erreur est survenue
      </Text>

      <Text className="mt-3 text-center text-[15px] leading-6 text-[#A1A4B2]">
        Nous n'avons pas pu charger les podcasts pour le moment.
      </Text>

      <Text
        className="mt-3 text-center text-[12px] text-[#A1A4B2]"
        numberOfLines={2}
      >
        {error?.message ?? 'Something went wrong'}
      </Text>

      <TouchableOpacity
        onPress={() => refetch()}
        className="mt-8 rounded-full bg-[#8E97FD] px-8 py-4"
      >
        <Text className="text-[14px] font-bold text-white">Réessayer</Text>
      </TouchableOpacity>
    </View>
  );
}

if (showLoading || (isLoading && !data)) {
  return (
    <View className="flex-1 items-center justify-center px-6">
      <View className="h-[120px] w-[120px] items-center justify-center rounded-full bg-[#F2F3FF]">
        <Image
          source={require('../../../assets/welcome-header.png')}
          className="h-[58px] w-[58px]"
          resizeMode="contain"
        />
      </View>

      <Text className="mt-8 text-center text-[22px] font-bold text-[#3F414E]">
        Chargement des méditations
      </Text>

      <Text className="mt-3 text-center text-[15px] leading-6 text-[#A1A4B2]">
        Nous préparons quelques podcasts relaxants pour toi...
      </Text>

      <ActivityIndicator size="small" color="#8E97FD" className="mt-8" />
    </View>
  );
}

  return (
    <ScrollView
      className="flex-1 "
      showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-15"
      contentContainerStyle={{ paddingTop: insets.top, paddingHorizontal: 16 }}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          onRefresh={() => refetch()}
        />
      }
    >
      <View className="mt-6 flex-row items-center justify-center">
        <Text className="text-[16px] font-bold tracking-[5px] text-[#3F414E]">
          Silent
        </Text>

        <Image
          source={require('../../../assets/welcome-header.png')}
          className="mx-2 h-[30px] w-[30px]"
          resizeMode="contain"
        />

        <Text className="text-[16px] font-bold tracking-[5px] text-[#3F414E]">
          Moon
        </Text>
      </View>

      <Text className="mt-12 text-[28px] font-bold text-[#3F414E]">
        Bonjour, Afsar
      </Text>

      <Text className="mt-2 text-[18px] text-[#A1A4B2]">
        Nous te souhaitons une bonne journée
      </Text>

      <View className="mt-8 flex-row gap-5">
        <View className="relative flex-1 rounded-xl bg-[#8E97FD] p-4">
          <Image
            source={require('../../../assets/basics.png')}
            className="absolute right-0 h-[100px] w-[125px]"
            resizeMode="contain"
          />

          <View className="flex-1" />

          <Text className="text-[18px] font-bold text-white">Bases</Text>

          <Text className="mt-1 text-[12px] font-medium text-white">
            COURS
          </Text>

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[11px] font-bold text-white">3-10 MIN</Text>

            <TouchableOpacity className="rounded-full bg-white px-5 py-3">
              <Text className="text-[12px] font-bold text-[#3F414E]">
                START
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="relative h-[210px] flex-1 overflow-hidden rounded-xl bg-[#FFC97E] p-4">
          <Image
            source={require('../../../assets/relaxation.png')}
            className="absolute right-0 h-[199px] w-[200px]"
            resizeMode="contain"
          />

          <View className="flex-1" />

          <Text className="text-[18px] font-bold text-[#3F414E]">
            Relaxation
          </Text>

          <Text className="mt-1 text-[12px] font-medium text-[#3F414E]">
            PODCAST
          </Text>

          <View className="mt-8 flex-row items-center justify-between">
            <Text className="text-[11px] font-bold text-[#3F414E]">
              3-10 MIN
            </Text>

            <TouchableOpacity className="rounded-full bg-[#3F414E] px-5 py-3">
              <Text className="text-[12px] font-bold text-white">START</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="relative mt-5 h-[95px] overflow-hidden rounded-xl bg-[#3F414E] px-7 py-5">
        <Image
          source={require('../../../assets/vector-2.png')}
          className="absolute right-[-5px] top-[-10px] h-[80px] w-[230px]"
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/vector-1.png')}
          className="absolute left-[-20px] h-[100px] w-[125px]"
          resizeMode="contain"
        />

        <Image
          source={require('../../../assets/ellipse.png')}
          className="absolute bottom-[-15px] right-[95px] h-[58px] w-[70px]"
          resizeMode="contain"
        />

        <View className="relative z-10 pr-14">
          <Text className="text-[18px] font-bold text-white">
            Pensée du jour
          </Text>

          <Text
            className="mt-1 text-[12px] font-light text-white"
            numberOfLines={1}
          >
            {data?.[2]?.trackName ?? 'Méditation du jour'} - 3-10 MIN
          </Text>
        </View>

        <TouchableOpacity className="absolute right-7 top-[27px] z-10 h-[42px] w-[42px] items-center justify-center rounded-full bg-white">
          <Ionicons name="play" size={20} color="#3F414E" />
        </TouchableOpacity>
      </View>

      <Text className="mt-10 text-[24px] font-bold text-[#3F414E]">
        Recommandé pour toi
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-5 mb-8"
        contentContainerClassName="pb-10"
      >
        {recommendations.map((podcast) => (
          <TouchableOpacity key={podcast.trackId} 
            className="mr-5 w-[162px]"
            onPress={() => router.push(`/details/${podcast.trackId}`)}
            >
            {podcast.artworkUrl600 ? (
              <Image
                source={{ uri: podcast.artworkUrl600 }}
                className="h-[113px] w-[162px] rounded-xl"
                resizeMode="cover"
              />
            ) : (
              <View className="h-[113px] w-[162px] rounded-xl bg-[#AFDBC5]" />
            )}

            <Text
              className="mt-3 text-[18px] font-bold text-[#3F414E]"
              numberOfLines={1}
            >
              {podcast.trackName}
            </Text>

            <Text
              className="mt-1 text-[12px] font-bold text-[#A1A4B2]"
              numberOfLines={1}
            >
              {podcast.artistName}
            </Text>

            <Text className="mt-1 text-[10px] font-bold text-[#A1A4B2]">
              PODCAST - {podcast.trackCount ?? 0} ÉPISODES
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScrollView>
  );
}