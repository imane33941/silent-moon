import { FlatList, Text, View } from "react-native";

import {onBoardingTopics} from "../constants/onBoardingsTopics";
import { TopicCard } from "../components/TopicCard";

export default function ChooseTopic() {
  return (
    <View className="flex-1 bg-white px-[24px] pt-[74px]">
      <Text className="text-[28px] font-bold text-[#3F414E]">What Brings you</Text>
      <Text className="text-[28px] text-[#3F414E] mb-3">to Silent Moon?</Text>
      <Text className="text-[#A1A4B2] mb-6">
        choose a topic to focus on:
      </Text>

      <FlatList
        data={onBoardingTopics}
        keyExtractor={(topic) => topic.id}
        numColumns={2}
        columnWrapperClassName="justify-between"
        contentContainerClassName="pb-[40px]"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TopicCard
            title={item.title}
            bgColor={item.bgColor}
            height={item.height}
            textColor={item.textColor}
            image={item.image}
          />
        )}
      />
    </View>
  );
}
