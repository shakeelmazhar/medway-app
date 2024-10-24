import { JSX } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface RNButtonProps {
  disabled?: boolean;
  testID?: string;
  onPress?: () => void;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  width?: number | string;
  buttonColor?: string;
  arrowIconColor?: string;
  btnText?: string;
  style?: StyleProp<ViewStyle>;
  btnIconsDisabled?: boolean;
  leftIcon?: JSX.Element | null;
  rightIcon?: JSX.Element;
  btnTextColor?: string;
  textStyle?: StyleProp<TextStyle>;
  shouldTranslateBtnText?: boolean;
  withAlinmaLogo?: boolean;
  btnIcon?: string;
  btnIconColor?: string;
}
