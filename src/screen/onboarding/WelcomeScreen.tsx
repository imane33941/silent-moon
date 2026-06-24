import { Image, Text, TouchableOpacity, View } from 'react-native';

export function WelcomeScreen() {
  return (
    <View className="flex-1 bg-[#8E97FD] px-6">
      <View className="mt-25 flex-row items-center justify-center">
        <Text className="text-[16px] font-bold tracking-[5px] text-white">
          Silent
        </Text>

        <Image
          source={require('../../../assets/welcome-header.png')}
          className="mx-2 h-[30px] w-[30px]"
          resizeMode="cover"
        />

        <Text className="text-[16px] font-bold tracking-[5px] text-white">
          Moon
        </Text>
      </View>

      <View className="mt-24 items-center">
        <Text className="text-center text-[30px] font-bold text-[#FFECCC]">
          Bonjour Afsar, bienvenue
        </Text>

        <Text className="mt-2 text-center text-[30px] font-light text-white">
          sur Silent Moon
        </Text>

        <Text className="mt-8 text-center text-[16px] font-light leading-8 text-white">
          Explore l’application et trouve un moment de calme{'\n'}
          pour préparer ta méditation.
        </Text>
      </View>

      <View className="flex-1 mt-12">
        <View className="items-center justify-center">
          <Image
            source={require('../../../assets/sign-up.png')}
            className="h-[258px] w-[430px]"
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity className="mt-auto mb-24 h-[58px] items-center justify-center rounded-full bg-white">
          <Text className="text-[14px] font-bold text-[#3F414E]">
            COMMENCER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
