import { Tabs } from "expo-router";

const AppLayout = () => {
  return (
    <Tabs backBehavior="firstRoute" initialRouteName="home">
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
    </Tabs>
  );
};

export default AppLayout;
