import Ionicons from '@react-native-vector-icons/ionicons';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const sleepItems = [
  {
    id: '1',
    title: 'Sommeil profond',
    subtitle: '20 MIN',
    icon: 'moon-outline',
  },
  {
    id: '2',
    title: 'Pluie douce',
    subtitle: '45 MIN',
    icon: 'rainy-outline',
  },
  {
    id: '3',
    title: 'Calme du soir',
    subtitle: '15 MIN',
    icon: 'cloudy-night-outline',
  },
];

export default function SleepPage() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      className="flex-1 bg-white"
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

      <Text className="mt-12 text-[28px] font-bold text-[#3F414E]">
        Sommeil
      </Text>

      <Text className="mt-2 text-[18px] leading-7 text-[#A1A4B2]">
        Prépare ton esprit à une nuit calme et réparatrice
      </Text>


      <View className="mt-8 rounded-2xl bg-[#8E97FD] p-6">
        <View className="flex-row items-center gap-4">
          <Ionicons name="moon" size={34} color="white" />
          <Text className=" text-[20px] font-bold text-white">
            Prépare ta nuit
          </Text>
        </View>

        <Text className="mt-4 text-[14px] text-white/80">
          Respire, relâche la pression et laisse ton esprit ralentir
        </Text>
      </View>

      <Text className="mt-8 text-[22px] font-bold text-[#3F414E]">
        Suggestions
      </Text>

      <View className="mt-4">
        {sleepItems.map((item) => (
          <View
            key={item.id}
            className="mb-3 flex-row items-center rounded-2xl bg-[#F6F7FB] p-4"
          >
            <View className="h-[48px] w-[48px] items-center justify-center rounded-xl bg-[#F2F3FF]">
              <Ionicons name={item.icon as any} size={24} color="#8E97FD" />
            </View>

            <View className="ml-4">
              <Text className="text-[16px] font-bold text-[#3F414E]">
                {item.title}
              </Text>

              <Text className="mt-1 text-[12px] font-bold text-[#A1A4B2]">
                {item.subtitle}
              </Text>
            </View>
             <TouchableOpacity className="ml-auto rounded-full bg-[#E0E0E0] p-3">
                <Ionicons name="play" size={20} color="#3F414E" />
              </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}