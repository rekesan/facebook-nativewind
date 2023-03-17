import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { data, postData } from "../../data";
import Story from "../../components/Story";
import Post from "../../components/Post";

const Home = () => {

  const dateToday = new Date();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="bg-humid-cave"
        contentContainerStyle={{ rowGap: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white flex-row justify-center items-center p-2 gap-2 h-20">
          {/* user profile picture */}
          <View className="h-12 w-12 bg-gray-300 rounded-full" />

          {/* cusotm button */}
          <TouchableOpacity className="flex-1 border-1 rounded-full p-3 border-northern-light-grey flex-start">
            <Text className="font-semibold text-shadowed-steel">
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

        {/* {postData.map((post, index) => (
          <Post key={index} post={post} />
        ))} */}

        <FlatList
          data={postData}
          renderItem={(post) => <Post key={post.index} post={post.item} date={dateToday}/>}
          initialNumToRender={3}
          contentContainerStyle={{rowGap: 10}}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
