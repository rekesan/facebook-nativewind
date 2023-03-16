import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SvgFacebook, SvgSwr } from "../components/svg";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import InputField from "../components/InputField";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => (Keyboard.isVisible ? Keyboard.dismiss() : null)}
    >
      <KeyboardAvoidingView
        className="w-full h-full bg-[#f2f2f2]"
        behavior="height"
        keyboardVerticalOffset={-200}
      >
        {/* Top */}
        <View className="flex-[2] justify-center items-end flex-row">
          <SvgFacebook size={80} />
        </View>

        {/* Mid */}
        <View className="flex-[4] justify-center items-center gap-y-4">
          <InputField
            className="w-[90%] bg-white border-[1px] text-base font-medium h-14 border-[#A5ADB3] rounded-md p-4"
            placeholder="Mobile number or email"
            autoComplete="username"
            textContentType="username"
            onChangeText={setUsername}
          />

          <InputField
            className="w-[90%] bg-white border-[1px] text-base font-medium h-14 border-[#A5ADB3] rounded-md p-4"
            placeholder="Password"
            autoComplete="password"
            textContentType="password"
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomButton
            label="Log in"
            className="bg-[#1a74e4] w-[90%]"
            textStyle="text-white"
          />

          <CustomButton
            label="Forgot password?"
            className="p-2 w-[90%]"
            textStyle="text-[#404040]"
          />
        </View>

        {/* Bottom */}
        <View className="flex-[1] justify-evenly items-center">
          <CustomButton
            label="Create new account"
            className="p-3 border-[1px] border-[#1a74e4] w-[90%]"
            textStyle="text-[#1a74e4]"
          />
          <View className="flex-row items-center">
            <SvgSwr size={26} />
            <Text className="text-lg font-bold text-[#2e2e2e]">SWR</Text>
            <Text className="text-lg text-[#4a4a4a]">TECH</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
