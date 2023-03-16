import { Pressable, View, Text } from "react-native";

import { IStoryProps } from "../interface";

const Story = ({ user }: IStoryProps) => {
  return (
    <Pressable className="bg-[#A5ADB3] rounded-xl w-28 p-3 justify-between overflow-hidden">
      {/* add the thumbnail of the story here */}

      <View className="w-9 h-9 rounded-full bg-gray-500" />
      <Text className="text-xs text-white font-bold" numberOfLines={2}>
        {user.name}
      </Text>
    </Pressable>
  );
};

export default Story;
