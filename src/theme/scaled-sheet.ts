import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

interface CustomImageStyle extends ImageStyle {
  overflow: "visible" | "hidden" | undefined;
}
export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | CustomImageStyle;
};

const createStyleSheet = <T extends NamedStyles<T> | NamedStyles<any>>(
  style: T & NamedStyles<any>,
) => ScaledSheet.create(style) as unknown as T;

export default createStyleSheet;
