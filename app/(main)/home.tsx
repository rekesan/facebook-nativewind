import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { data, postData } from "../../data";
import Story from "../../components/Story";
import Post from "../../components/Post";

const Home = () => {
  return (
    <ScrollView className="bg-[#c9ccd1]" contentContainerStyle={{ rowGap: 10 }}>
      <View className="bg-white flex-row justify-center items-center p-2 gap-2 h-20">
        {/* user profile picture */}
        <View className="h-12 w-12 bg-gray-300 rounded-full" />

        {/* cusotm button */}
        <TouchableOpacity className="flex-[1] border-[1px] rounded-full p-3 border-[#A5ADB3] flex-start">
          <Text className="font-semibold text-[#474747]">
            What's on your mind?
          </Text>
        </TouchableOpacity>

        {/* Add image icon */}
        <View className="h-12 w-12 bg-green-300 rounded-full" />
      </View>

      {/* REEL view */}
      <View className="h-56 bg-white z-10">
        <FlatList
          className="overflow-visible m-3 z-50"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={(data) => <Story key={data.index} user={data.item} />}
          contentContainerStyle={{ columnGap: 6 }}
        />
      </View>

      {postData.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ScrollView>
  );
};

export default Home;




