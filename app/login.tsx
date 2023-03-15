import {
  KeyboardAvoidingView,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SvgFacebook, SvgSwr } from "../components/svg";
import CustomButton from "../components/CustomButton";
import { styled } from "nativewind";
import { useState } from "react";
import InputField from "../components/InputField";
import { useRouter } from "expo-router";

const TopView = styled(View, "flex-[2] justify-center items-end flex-row");
const MiddleView = styled(View, "flex-[4] justify-center items-center gap-y-4");
const BottomView = styled(View, "flex-[1] justify-evenly items-center");
const StyledInputField = styled(
  InputField,
  "w-[90%] bg-white border-[1px] text-base font-medium h-14 border-[#A5ADB3] rounded-md p-4"
);

const StyledText = styled(Text, "text-lg");
const SWRText = styled(StyledText, "font-bold text-[#2e2e2e]");
const TECHText = styled(StyledText, "text-[#4a4a4a]");

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
        <TopView>
          <SvgFacebook size={80} />
        </TopView>

        {/* Mid */}
        <MiddleView>
          <StyledInputField
            placeholder="Mobile number or email"
            autoComplete="username"
            textContentType="username"
            onChangeText={setUsername}
          />

          <StyledInputField
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
        </MiddleView>

        {/* Bottom */}
        <BottomView>
          <CustomButton
            label="Create new account"
            className="p-3 border-[1px] border-[#1a74e4] w-[90%]"
            textStyle="text-[#1a74e4]"
          />
          <View className="flex-row items-center">
            <SvgSwr size={26} />
            <SWRText>SWR</SWRText>
            <TECHText>TECH</TECHText>
          </View>
        </BottomView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
