import { TextInput, TextInputProps } from "react-native";

interface InputFieldProps extends TextInputProps {}

const InputField = (props: InputFieldProps) => {
    return <TextInput autoCapitalize="none" {...props}/>
};

export default InputField;
