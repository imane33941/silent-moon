import Ionicons from '@react-native-vector-icons/ionicons';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfilePage() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1"
      contentContainerStyle={{ paddingTop: insets.top, paddingHorizontal: 16 }}
    >
      <View className="flex-row items-center justify-center">
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

      <View className="mt-12 items-center">
        <View className="h-[104px] w-[104px] items-center justify-center rounded-full bg-[#F2F3FF]">
          <Ionicons name="person" size={48} color="#8E97FD" />
        </View>

        <Text className="mt-5 text-[28px] font-bold text-[#3F414E]">
          Afsar
        </Text>

        <Text className="mt-2 text-[16px] text-[#A1A4B2]">
          Ton espace bien-être
        </Text>
      </View>

      <View className="mt-8 flex-row gap-3">
        <View className="flex-1 items-center rounded-2xl bg-[#F6F7FB] p-4">
          <Text className="text-[22px] font-bold text-[#3F414E]">12</Text>
          <Text className="mt-1 text-[12px] text-[#A1A4B2]">Sessions</Text>
        </View>

        <View className="flex-1 items-center rounded-2xl bg-[#F6F7FB] p-4">
          <Text className="text-[22px] font-bold text-[#3F414E]">145</Text>
          <Text className="mt-1 text-[12px] text-[#A1A4B2]">Minutes</Text>
        </View>

        <View className="flex-1 items-center rounded-2xl bg-[#F6F7FB] p-4">
          <Text className="text-[22px] font-bold text-[#3F414E]">7</Text>
          <Text className="mt-1 text-[12px] text-[#A1A4B2]">Jours</Text>
        </View>
      </View>

      <View className="mt-8 rounded-2xl bg-[#8E97FD] p-5">
        <Ionicons name="flame-outline" size={28} color="white" />

        <Text className="mt-4 text-[20px] font-bold text-white">
          Belle progression
        </Text>

        <Text className="mt-2 text-[14px] text-white/80">
          Continue ta routine, quelques minutes par jour suffisent.
        </Text>
      </View>
    </ScrollView>
  );
}