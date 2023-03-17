import { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import { IPostProps } from "../interface";
import CustomButton from "./CustomButton";

const MAX_LINES = 3;

const Post = ({ post, date }: { post?: IPostProps; date?: Date }) => {
  const [isOverflowed, setIsOverflowed] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const handleContentTextLayout = (event) => {
    const { lines } = event.nativeEvent;
    setIsOverflowed(lines.length > MAX_LINES);
  };

  return (
    <View className="min-h-[180px] bg-white justify-between content-center">
      {/* user dp and name */}
      <View className="flex-row h-14 justify-between m-3 mb-0">
        <View className="flex-row gap-3 items-center">
          <CustomButton className="rounded-full bg-northern-light-grey h-12 w-12" />
          <View className="justify-center">
            {/* link the name */}
            <Text className="text-base font-bold">{post.name}</Text>
            <Text className="text-xs items-center justify-center">
              {date?.toDateString()}
            </Text>
          </View>
        </View>
        <CustomButton label="..." />
      </View>

      {/* post content */}
      <View className="grow-0">
        <Text
          className="m-3"
          numberOfLines={seeMore ? 9999 : MAX_LINES}
          onTextLayout={handleContentTextLayout}
        >
          {post.content}
        </Text>
        {isOverflowed && (
          <Pressable onPress={() => setSeeMore(!seeMore)}>
            <Text
              className={`underline ml-3 font-semibold text-blue-500 ${
                seeMore && "text-northern-light-grey"
              }`}
            >
              {seeMore ? "See less" : "See more"}
            </Text>
          </Pressable>
        )}

        {/* add image here */}
      </View>

      {/* buttons */}
      <View className="flex-row h-14 m-3 mt-5 mb-0 border-t-1 border-northern-light-grey">
        <CustomButton
          icon={<EvilIcons name="like" size={24} color="black" />}
          label="Like"
          className="w-1/3 flex-1"
          textStyle="font-normal"
        />
        <CustomButton
          icon={<EvilIcons name="comment" size={24} color="black" />}
          label="Comment"
          className="w-1/3"
          textStyle="font-normal"
        />
        <CustomButton
          icon={<EvilIcons name="share-apple" size={24} color="black" />}
          label="Share"
          className="w-1/3"
          textStyle="font-normal"
        />
      </View>
    </View>
  );
};

export default Post;
