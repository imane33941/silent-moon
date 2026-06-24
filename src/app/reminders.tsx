import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const days = ['L', 'Ma', 'Me', 'J', 'V', 'S', 'D'];

export default function Reminders() {
  const [time, setTime] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <View className="flex-1 bg-white px-[24px] pt-[60px] pb-[40px]">
      <Text className="text-[28px] font-bold text-[#3F414E] mb-3">
        A quelle heure souhaitez vous méditer ?
      </Text>
      <Text className="text-[#A1A4B2] mb-8">
        N'importe quelle heure peut être choisie mais nous recommandons de le faire en premier le matin.
      </Text>

      {/* Time Picker */}
      <View className="bg-[#F5F5F9] rounded-[16px] px-4 py-2 mb-10 items-center">
        <DateTimePicker
        testID="dateTimePicker"
        value={time}
        mode="time"
        is24Hour={true}
        display="spinner"
        textColor="#3F414E"
        themeVariant="light"
        onChange={(event, selectedDate) => {
            if (selectedDate) setTime(selectedDate);
        }}
        />
      </View>

      <Text className="text-[28px] font-bold text-[#3F414E] mb-3">
        Quel jour souhaitez vous méditer ?
      </Text>
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

      <View className="mt-auto">
        <TouchableOpacity
          disabled={selectedDays.length === 0}
          className={`h-[60px] items-center justify-center rounded-full mb-4 ${
            selectedDays.length > 0 ? 'bg-[#8E97FD]' : 'bg-[#C8CAD4]'
          }`}
        >
          <Text className="text-[14px] font-semibold text-white tracking-widest">
            Sauvegarder
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Text className="text-[14px] font-semibold text-[#3F414E] tracking-widest">
            Plus Tard
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}