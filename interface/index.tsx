import { PressableProps } from "react-native";

export interface IUserData {
  name: string;
  age: number;
}

export interface IStoryProps extends PressableProps {
  user?: IUserData;
}

export interface IPostProps {
  name: string;
  content: string;
}
