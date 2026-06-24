import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function WelcomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <View className="relative">
        <Image
          source={require("../../../assets/welcome.png")}
          className="w-[423px] h-[504px]"
          resizeMode="cover"
        />

        <View className="absolute top-25 left-0 right-0 flex-row items-center justify-center">
          <Text className="text-[16px] text-[#3F414E] font-bold tracking-[5px]">
            Silent
          </Text>

          <Image
            source={require("../../../assets/welcome-header.png")}
            className="mx-2 h-[30px] w-[30px]"
            resizeMode="cover"
          />

          <Text className="text-[16px] text-[#3F414E] font-bold tracking-[5px] ">
            Moon
          </Text>
        </View>
      </View>

      <View className="flex-1 px-6 pt-10 pb-10">
        <View>
          <Text className="text-center text-[30px] font-bold text-[#3F414E]">
            We are what we do
          </Text>

          <Text className="mt-6 text-center font-light text-[16px] leading-6 text-[#A1A4B2]">
            Thousand of people are using silent moon{"\n"}
            for small meditation
          </Text>
        </View>

        <View className="mt-auto">
          <TouchableOpacity
            onPress={() => router.push("/choose-topic")}
            className="h-15.75 items-center justify-center rounded-full bg-[#8E97FD]"
          >
            <Text className="text-[14px] font-medium text-white">SIGN UP</Text>
          </TouchableOpacity>

          <View className="mt-5 flex-row justify-center">
            <Text className="text-[14px] font-medium text-[#A1A4B2]">
              ALREADY HAVE AN ACCOUNT ?{" "}
            </Text>
            <Text className="text-[14px] font-medium text-[#8E97FD]">
              LOG IN
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
