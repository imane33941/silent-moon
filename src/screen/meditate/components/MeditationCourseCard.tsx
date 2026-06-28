import { Text, TouchableOpacity, ImageBackground, View } from "react-native"

type MeditationCourseCardProps = {
    title: string
    image?: any
    height?: number
    onPress?: () => void
}

export default function MeditationCourseCard({ title, image, height, onPress }: MeditationCourseCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ height: height ?? 210 }}
            className="w-[178px] rounded-lg mb-4.5 overflow-hidden"
        >
            {image ? (
                <ImageBackground
                    source={image}
                    style={{ width: "100%", height: "100%", justifyContent: "flex-end" }}
                    resizeMode="cover">

                    <Text className="text-[18px] text-white font-bold p-3">
                        {title}
                    </Text>

                </ImageBackground>

            ) : (
                <View className="w-full h-full bg-[#8E97FD] justify-end">
                    <Text className="text-[18px] font-bold text-white p-3">
                        {title}
                    </Text>
                </View>
            )

            }



        </TouchableOpacity>


    )
}