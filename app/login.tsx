import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import { SvgFacebook, SvgSwr } from "../components/svg";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const Login = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => (Keyboard.isVisible ? Keyboard.dismiss() : null)}
    >
      <KeyboardAvoidingView
        className="w-full h-full bg-bleach-silk"
        behavior="height"
        keyboardVerticalOffset={-200}
      >
        {/* Top */}
        <View className="flex-2 justify-center items-end flex-row">
          <SvgFacebook size={80} />
        </View>

        {/* Mid */}
        <View className="flex-4 justify-center items-center gap-y-4">
          <InputField
            className="w-9/10 bg-white border-1 text-base font-medium h-16 border-northern-light-grey rounded-md p-4"
            placeholder="Mobile number or email"
            autoComplete="username"
            textContentType="username"
            onChangeText={setUsername}
          />

          <InputField
            className="w-9/10 bg-white border-1 text-base font-medium h-16 border-northern-light-grey rounded-md p-4"
            placeholder="Password"
            autoComplete="password"
            textContentType="password"
            onChangeText={setPassword}
            secureTextEntry
          />

          <CustomButton
            label="Log in"
            className="bg-bright-navy-blue w-9/10"
            textStyle="text-bleach-silk"
          />

          <CustomButton
            label="Forgot password?"
            className="p-2 w-9/10"
            textStyle="text-bauhaus"
          />
        </View>

        {/* Bottom */}
        <View className="flex-1 justify-evenly items-center">
          <CustomButton
            label="Create new account"
            className="p-3 border-1 border-bright-navy-blue w-9/10"
            textStyle="text-bright-navy-blue"
          />
          <View className="flex-row items-center">
            <SvgSwr size={26} />
            <Text className="text-lg font-bold text-carbon-fiber">SWR</Text>
            <Text className="text-lg text-shadowed-steel">TECH</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
