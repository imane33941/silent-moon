import { useRef, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View, ViewToken } from 'react-native';

const hours = Array.from({ length: 23 }, (_, i) => String(i ).padStart(2, '0'));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

const days = ['L', 'Ma', 'Me', 'J', 'V', 'S', 'D'];

const item_height = 44;
const visible_items = 5;

function TimeColumn({
  data,
  initialIndex = 0,
}: {
  data: string[];
  initialIndex?: number;
}) {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  const onScroll = useRef((event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / item_height);
    setSelectedIndex(index);
  }).current;

  const paddedData = ['', '', ...data, '', ''];

  return (
    <FlatList
      data={paddedData}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsVerticalScrollIndicator={false}
      snapToInterval={item_height}
      decelerationRate="fast"
      initialScrollIndex={initialIndex}
      getItemLayout={(_, index) => ({
        length: item_height,
        offset: item_height * index,
        index,
      })}
      style={{ height: item_height * visible_items }}
      onScroll={onScroll}
      scrollEventThrottle={16}
      renderItem={({ item, index }) => {
        const realIndex = index - 2;
        const isSelected = realIndex === selectedIndex;
        return (
          <View
            className="items-center justify-center"
            style={{ height: item_height }}
          >
            <Text
              className={
                isSelected
                  ? 'text-[22px] font-bold text-[#3F414E]'
                  : Math.abs(realIndex - selectedIndex) === 1
                  ? 'text-[18px] text-[#A1A4B2]'
                  : 'text-[14px] text-[#C8CAD4]'
              }
            >
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
}

export default function Reminders() {
  const [selectedDays, setSelectedDays] = useState<string[]>(['SU', 'M', 'T', 'W']);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <View className="flex-1 bg-white px-[24px] pt-[60px] pb-[40px]">
      <Text className="text-[28px] font-bold text-[#3F414E] mb-3">A quelle heure souhaitez vous méditer ?</Text>
      <Text className="text-[#A1A4B2] mb-8">
        N'importe quelle heure peut etre choisie mais nous recommandons de le faire en premier le matin.
      </Text>

      <View className="bg-[#F5F5F9] rounded-[16px] px-4 py-2 mb-10">
        <View
          className="absolute left-4 right-4 bg-white rounded-[10px]"
          style={{
            top: 8 + item_height * 2,
            height: item_height,
          }}
          pointerEvents="none"
        />
        <View className="flex-row justify-around">
          <TimeColumn data={hours} initialIndex={10} />
          <TimeColumn data={minutes} initialIndex={29} />
        </View>
      </View>

      <Text className="text-[28px] font-bold text-[#3F414E] mb-3 ">Quel jour souhaitez vous méditer ?</Text>
      <Text className="text-[#A1A4B2] mb-6">
        Chaque jour est idéal, mais nous recommandons d'en choisir au moins cinq.
      </Text>

      <View className="flex-row justify-between mb-10">
        {days.map((day) => {
          const isSelected = selectedDays.includes(day);
          return (
            <TouchableOpacity
              key={day}
              onPress={() => toggleDay(day)}
              className={`w-[40px] h-[40px] rounded-full items-center justify-center ${
                isSelected ? 'bg-[#3F414E]' : 'bg-white border border-[#EBEAEC]'
              }`}
            >
              <Text
                className={`text-[12px] font-semibold ${
                  isSelected ? 'text-white' : 'text-[#3F414E]'
                }`}
              >
                {day}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

{/* Buttons */}
        <View className="mt-auto">
        <TouchableOpacity
            onPress={() => selectedDays.length > 0 && console.log('save')}
            disabled={selectedDays.length === 0}
            className={`h-[60px] items-center justify-center rounded-full mb-4 ${
            selectedDays.length > 0 ? 'bg-[#8E97FD]' : 'bg-[#C8CAD4]'
            }`}
        >
            <Text className="text-[14px] font-semibold text-white tracking-widest">Sauvegarder</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
            <Text className="text-[14px] font-semibold text-[#3F414E] tracking-widest">Plus Tard</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}