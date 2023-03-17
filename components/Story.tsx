import { Pressable, View, Text } from "react-native";

import { IStoryProps } from "../interface";

const Story = ({ user }: IStoryProps) => {
  return (
    <Pressable className="bg-gray-700 rounded-xl w-28 p-3 justify-between overflow-hidden">
      {/* add the thumbnail of the story here */}

      <View className="w-10 h-10 rounded-full bg-gray-200 border-2 border-blue-700" />
      <Text className="text-xs text-white font-bold" numberOfLines={2}>
        {user.name}
      </Text>
    </Pressable>
  );
};

export default Story;
