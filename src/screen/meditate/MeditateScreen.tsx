import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import DailyCalmCard from "./components/DailyCalmCard";
import MeditationCourseCard from "./components/MeditationCourseCard";

const categories = [
    { id: "all", name: "Tous", icon: require("../../../assets/icons/Tous.png") },
    { id: "me", name: "Moi", icon: require("../../../assets/icons/Moi.png") },
    { id: "anxiety", name: "Anxiété", icon: require("../../../assets/icons/Anxiete.png") },
    { id: "sleep", name: "Sommeil", icon: require("../../../assets/icons/Sommeil.png") },
    { id: "kids", name: "Enfants", icon: require("../../../assets/icons/Enfant.png") },
];

const meditationCourses = [
    {
        id: "seven-days-calm",
        title: "7 jours de calme",
        image: require("../../../assets/meditate/7dayCalm.png"),
        height: 210,
    },
    {
        id: "anxiety-release",
        title: "Libérer l’anxiété",
        image: require("../../../assets/meditate/anxietyrelease.png"),
        height: 167,
    },
    {
        id: "how-to-meditate",
        title: "Comment méditer",
        image: require("../../../assets/meditate/howTOMeditate.png"),
        height: 167,
    },
    {
        id: "daily-practice",
        title: "Pratique quotidienne",
        image: require("../../../assets/meditate/Mask Group.png"),
        height: 210,
    },
];

export default function MeditateScreen() {
    const [selectedCategory, setSelectedCategory] = React.useState("all");

    return (
        <ScrollView 
        contentContainerClassName=" px-[16px] pt-[74px] items-center"
        className="flex-1 bg-white ">
            <Text className="text-[28px] font-bold text-[#3F414E] mb-3 ">
                Méditer
            </Text>

            <Text className="text-[16px] text-[#A1A4B2] mb-6 text-center">
                Nous pouvons apprendre à reconnaître le moment où notre esprit se livre à ses acrobaties quotidiennes habituelles.
            </Text>

            <View className="w-full h-[110px] mb-6">

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


            <View className="w-full">
                <DailyCalmCard
                    title="Calme du jour"
                    subtitle="30 AVR • PAUSE MÉDITATION"
                />
                <View className="w-full flex-row flex-wrap gap-x-6 mt-5 p-2">
                    {meditationCourses.map((course) => (
                        <MeditationCourseCard
                            key={course.id}
                            title={course.title}
                            image={course.image}
                            height={course.height}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
