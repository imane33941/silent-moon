import { ScrollView, Text, View, TouchableOpacity, Image } from "react-native";

type Topic = {
  title: string;
  bgColor: string;
};

const topics: Topic[] = [
  { title: "Reduce Stress", bgColor: "#808AFF" },
  { title: "Improve Performance", bgColor: "#FA6E5A" },
  { title: "Increase Happiness", bgColor: "#FEB18F" },
  { title: "Reduce Anxiety", bgColor: "#FFCF86" },
  { title: "Personal Growth", bgColor: "#6CB28E" },
  { title: "Better Sleep", bgColor: "#3F414E" },
];
const images: Record<string, any> = {
  "Reduce Stress": require("../../assets/images/reduceanxiety.png"),
  "Improve Performance": require("../../assets/images/improveperformance.png"),
};

export default function ChooseTopic() {
  return (
    <ScrollView
      className="flex-1 bg-white px-6 pt-17.5"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-bold text-gray-800">What Brings you</Text>
      <Text className="text-2xl text-gray-800 mb-3">to Silent Moon?</Text>
      <Text className="text-base text-gray-400 mb-6">
        choose a topic to focus on:
      </Text>

      <View className="flex-row flex-wrap justify-between">
        {topics.map((topic) => (
          <TouchableOpacity
            key={topic.title}
            style={{ backgroundColor: topic.bgColor }}
            className="w-[47%] h-42.5 rounded-lg p-3.5 mb-4.5 justify-between"
            activeOpacity={0.8}
          >
            {images[topic.title] ? (
              <Image
                source={images[topic.title]}
                className="h-22.5 w-full rounded-lg"
                resizeMode="cover"
              />
            ) : (
              <View className="h-22.5 rounded-lg bg-white/25" />
            )}
            <Text className="text-white text-base font-bold">
              {topic.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
