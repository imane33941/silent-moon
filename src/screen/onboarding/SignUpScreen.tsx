import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export function SignUpScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <View className="relative">
        <Image
          source={require('../../../assets/welcome.png')}
          className="w-[423px] h-[504px]"
          resizeMode="cover"
        />

        <View className="absolute top-25 left-0 right-0 flex-row items-center justify-center">
          <Text className="text-[16px] text-[#3F414E] font-bold tracking-[5px]">
            Silent
          </Text>

          <Image
            source={require('../../../assets/welcome-header.png')}
            className="mx-2 h-[30px] w-[30px]"
            resizeMode="cover"
          />

          <Text className="text-[16px] text-[#3F414E] font-bold tracking-[5px] ">
            Moon
          </Text>
        </View>
      </View>

      <View className="flex-1 px-6 py-10">
        <View>
          <Text className="text-center text-[30px] font-bold text-[#3F414E]">
            Nous sommes ce que nous faisons
          </Text>

          <Text className="mt-6 text-center font-light text-[16px] leading-6 text-[#A1A4B2]">
            Des milliers de personnes utilisent Silent Moon{'\n'}
            pour méditer quelques minutes par jour
          </Text>
        </View>

        <View className="mt-auto">
          <TouchableOpacity
            onPress={() => router.push('/welcome')}
            className="h-[63px] items-center justify-center rounded-full bg-[#8E97FD]"
          >
            <Text className="text-[14px] font-medium text-white">
              S’INSCRIRE
            </Text>
          </TouchableOpacity>

          <View className="mt-5 flex-row justify-center">
            <Text className="text-[14px] font-medium text-[#A1A4B2]">
              VOUS AVEZ DÉJÀ UN COMPTE ?{' '}
            </Text>
            <Text className="text-[14px] font-medium text-[#8E97FD]">
              SE CONNECTER
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
