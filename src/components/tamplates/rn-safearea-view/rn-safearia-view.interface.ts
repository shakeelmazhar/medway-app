import { JSX } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface RNSafeAreaViewProps {
  testID?: string;
  children: JSX.Element | JSX.Element[];
  style?: StyleProp<ViewStyle>;
}
