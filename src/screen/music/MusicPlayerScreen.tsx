import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
const imagebg = require("../../../assets/music/player-bg.png")

const returnIcon = require("../../../assets/music/icon-music-return.png");
const nextIcon = require("../../../assets/music/icon-music-next.png");

export default function MusicPlayerScreen() {
    const router = useRouter()
    return (
        <ImageBackground
            source={imagebg}
            className="flex-1 w-full h-full "
            resizeMode="cover"
        >

            <View className="mt-[100px] px-4 w-full flex-row items-center justify-between">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-[55px] h-[55px] rounded-full bg-white items-center justify-center">
                    <Text className="text-[24px] text-[#3F414E]">×</Text>
                </TouchableOpacity>

                <View className="flex-row">
                    <TouchableOpacity className="w-[55px] h-[55px] rounded-full bg-[#B6B8BF] items-center justify-center mr-3">
                        <Text className="text-white">♡</Text>
                    </TouchableOpacity>

                    <TouchableOpacity className="w-[55px] h-[55px] rounded-full bg-[#B6B8BF] items-center justify-center">
                        <Text className="text-white">↓</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className="flex-1 items-center justify-center">
                <Text className="text-[34px] font-bold">Concentration</Text>
                <Text className="my-2 text-[#A0A3B1] text-[14px]">7 JOURS DE CALME</Text>

                <View className="flex-row items-center justify-center mt-[60px]">
                    <TouchableOpacity className="w-[44px] h-[44px] items-center justify-center">
                        <Image source={returnIcon} className="w-[26px] h-[26px]" resizeMode="contain" />
                    </TouchableOpacity>

                    <View className="w-[88px] h-[88px] rounded-full bg-[#E5E6EC] items-center justify-center mx-[32px]">
                        <TouchableOpacity className="w-[72px] h-[72px] rounded-full bg-[#3F414E] items-center justify-center mx-[42px]">
                            <Text className="text-white text-[28px] font-bold">Ⅱ</Text>
                        </TouchableOpacity>
                    </View>


                    <TouchableOpacity className="w-[44px] h-[44px] items-center justify-center">
                        <Image source={nextIcon} className="w-[26px] h-[26px]" resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <View className="w-full mt-[48px] px-[24px]">
                    <View className="h-[2px] bg-[#A1A4B2] rounded-full">
                        <View className="w-[18%] h-[2px] bg-[#3F414E] rounded-full" />
                        <View className="w-[10px] h-[10px] rounded-full bg-[#3F414E] -mt-[6px] ml-[18%]" />
                    </View>

                    <View className="flex-row justify-between mt-3">
                        <Text className="text-[#3F414E] text-[12px]">01:30</Text>
                        <Text className="text-[#3F414E] text-[12px]">45:00</Text>
                    </View>
                </View>
            </View>


        </ImageBackground>
    )


}