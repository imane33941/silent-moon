import { useAsyncStorage } from '@/hooks/use-async-storage';
import { useGetAudioDbAlbums } from '@/hooks/use-get-home-albums';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import {
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

  const { data, refetch, isRefetching } = useGetAudioDbAlbums();

  const recommendations = data?.slice(0, 11) ?? [];

  useFocusEffect(
    useCallback(() => {
      if (!onboardingCompleted && !onboardingCompletedLoading) {
        router.replace('/onboarding');
      }
    }, [onboardingCompleted, onboardingCompletedLoading]),
  );

  return (
      <ScrollView
        className="flex-1 "
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-20"
        contentContainerStyle={{ paddingTop: insets.top, paddingHorizontal: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={() => refetch()}
          />
        }
      >
        <View className="mt-10 flex-row items-center justify-center">
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

            <Text className="mt-1 text-[12px] font-bold text-[#3F414E]">
              MUSIQUE
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
              {data?.[0]?.strAlbum ?? 'Pensée du jour'} - 3-10 MIN
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
          {recommendations.map((album) => (
            <View key={album.idAlbum} className="mr-5 w-[162px]">
              {album.strAlbumThumb ? (
                <Image
                  source={{ uri: album.strAlbumThumb }}
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
                {album.strAlbum}
              </Text>

              <Text
                className="mt-1 text-[12px] font-bold text-[#A1A4B2]"
                numberOfLines={1}
              >
                {album.strArtist}
              </Text>

              <Text className="mt-1 text-[10px] font-bold text-[#A1A4B2]">
                MUSIQUE . 3-10 MIN
              </Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
  );
}
