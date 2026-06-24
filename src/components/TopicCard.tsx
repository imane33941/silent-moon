import { Image, Pressable, Text, View } from "react-native";

type TopicCardProps = {
  title: string;
  bgColor: string;
  height: number;
  textColor: string;
  image?: any;
};
export const TopicCard = ({
  title,
  bgColor,
  height,
  textColor,
  image,
}: TopicCardProps) => {
  return (
    <Pressable
      style={{ backgroundColor: bgColor, height }}
      className="w-[47%] rounded-lg p-3.5 mb-4.5 justify-between"
    >
      {image ? (
        <Image
          source={image}
          className="w-full h-[90px] rounded-[10px]"
          resizeMode="contain"
        />
      ) : (
        <View className="w-full h-[90px] rounded-[10px] bg-white/20" />
      )}
      <Text className="text-[18px]  font-bold" style={{ color: textColor }}>
        {title}
      </Text>
    </Pressable>
  );
};
