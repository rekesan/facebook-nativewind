import { View, Text } from "react-native";

import { IPostProps } from "../interface";

const Post = ({ post }: { post?: IPostProps }) => {
  return (
    <View className="min-h-[180px] bg-white">
      <Text>{post.name}</Text>
      <Text>{post.content}</Text>
    </View>
  );
};

export default Post;