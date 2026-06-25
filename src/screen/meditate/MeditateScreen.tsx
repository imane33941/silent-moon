import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const categories = [
    { id: "all", name: "Tous", icon: require("../../../assets/icons/Tous.png") },
    { id: "me", name: "Moi", icon: require("../../../assets/icons/Moi.png") },
    { id: "anxiety", name: "Anxiété", icon: require("../../../assets/icons/Anxiete.png") },
    { id: "sleep", name: "Sommeil", icon: require("../../../assets/icons/Sommeil.png") },
    { id: "kids", name: "Enfants", icon: require("../../../assets/icons/Enfant.png") },
];

export default function MeditateScreen() {
    const [selectedCategory, setSelectedCategory] = React.useState("all");

    return (
        <View className="flex-1 bg-white px-[24px] pt-[74px] items-center ">
            <Text className="text-[28px] font-bold text-[#3F414E] mb-3 ">
                Méditer
            </Text>

            <Text className="text-[16px] text-[#A1A4B2] mb-6 text-center">
                Nous pouvons apprendre à reconnaître le moment où notre esprit se livre à ses acrobaties quotidiennes habituelles.
            </Text>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="pt-6 pb-6"
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(item.id)}
                        className="items-center mr-5"
                    >
                        <View
                            className={
                                selectedCategory === item.id
                                    ? "w-[65px] h-[60px] rounded-[25px] bg-[#8E97FD] items-center justify-center"
                                    : "w-[65px] h-[60px] rounded-[25px] bg-[#A0A3B1] items-center justify-center"
                            }
                        >
                            <Image
                                source={item.icon}
                                className="w-[25px] h-[25px]"
                                resizeMode="contain"
                            />
                        </View>

                        <Text
                            className={
                                selectedCategory === item.id
                                    ? "text-[#3F414E] text-[14px] mt-2"
                                    : "text-[#A0A3B1] text-[14px] mt-2"
                            }
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}
