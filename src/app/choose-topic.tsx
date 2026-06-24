import { ScrollView, Text, View } from "react-native";

import {onBoardingTopics} from "../constants/onBoardingsTopics";
import { TopicCard } from "../components/TopicCard";

export default function ChooseTopic() {
  return (
    <ScrollView
      className="flex-1 bg-white px-[24px] pt-[74px]"
    >
      <Text className="text-[28px] font-bold text-[#3F414E]">What Brings you</Text>
      <Text className="text-[28px] text-[#3F414E] mb-3">to Silent Moon?</Text>
      <Text className="text-[#A1A4B2] mb-6">
        choose a topic to focus on:
      </Text>

      <View className="flex-row flex-wrap justify-between pb-[40px]">
        {onBoardingTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            title={topic.title}
            bgColor={topic.bgColor}
            height={topic.height}
            textColor={topic.textColor}
            image={topic.image}
          />
        ))}
      </View>
    </ScrollView>
  );
}
