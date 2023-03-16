import { styled } from "nativewind";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

const StyledPress = styled(
  TouchableOpacity,
  "p-4 rounded-md flex-row justify-center items-center overflow-hidden"
);
const StyledView = styled(View, "justify-center flex-row");
const StyledText = styled(Text, "text-right text-base font-medium");

const variantStyles = {
  primary: "",
  secondary: "",
  outline: "",
};

const textVariantStyles = {
  default: "",
  primary: "",
};

interface CustomButtonProps extends TouchableOpacityProps {
  label?: string;
  icon?: JSX.Element;
  textStyle?: TextProps["style"];
  variant?: "outline" | "primary" | "borderless";
}

const CustomButton = ({
  label,
  icon,
  onPress,
  style,
  textStyle,
}: CustomButtonProps) => {
  return (
    <StyledPress style={style} onPress={onPress} activeOpacity={0.8}>
      <StyledView>
        {icon}
        <StyledText style={textStyle}>{label}</StyledText>
      </StyledView>
    </StyledPress>
  );
};

export default styled(CustomButton, {
  props: {
    textStyle: true,
  },
});
