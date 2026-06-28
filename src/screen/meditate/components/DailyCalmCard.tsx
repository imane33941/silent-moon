import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

type DailyCalmCardProps = {
    title: string;
    subtitle: string;
    onPress?: () => void;
};

const dailyCalmBg = require("../../../../assets/meditate/daily-calm-bg.png");

export default function DailyCalmCard({ title, subtitle, onPress }: DailyCalmCardProps) {
    return (
        <View className="w-full h-[95px] rounded-[8px] overflow-hidden "
        >
            <ImageBackground
                source={dailyCalmBg}
                style={{
                    width: "100%",
                    height: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",

                }}
                resizeMode="cover"
            >
                <View className="ml-2">
                    <Text className="text-[#3F414E] text-[18px] font-bold">
                        {title}
                    </Text>
                    <Text className="text-[#5A6175] text-[11px] font-semibold mt-1">
                        {subtitle}
                    </Text>
                </View>

                <TouchableOpacity
                    onPress={onPress}
                    className="w-[40px] h-[40px] rounded-full bg-[#3F414E] items-center justify-center mr-6">
                    <Text className="text-white text-[18px]">▶</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
