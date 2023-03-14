import { Text, View } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = styled(View, "flex-1 items-center p-6 bg-gray-500");
const Main = styled(View, "flex-1 justify-center max-w-5xl mx-auto");
const Title = styled(Text, "font-bold text-6xl");
const Subtitle = styled(Text, "text-4xl text-[#38434D]");

const Page = () => {
  return (
    <SafeAreaView className="h-full">
      <Container>
        <Main>
          <Title>Hello World</Title>
          <Subtitle>This is the first page of your app.</Subtitle>
        </Main>
      </Container>
    </SafeAreaView>
  );
};
export default Page;
