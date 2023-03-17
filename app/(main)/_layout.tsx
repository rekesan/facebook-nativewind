import { Tabs } from "expo-router";
import { Platform, StatusBar } from "react-native";

const AppLayout = () => {
  return (
    <Tabs
      backBehavior="firstRoute"
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
      sceneContainerStyle={{
        paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
    </Tabs>
  );
};

export default AppLayout;
