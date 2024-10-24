import { ReactNode } from "react";
import { LayoutChangeEvent, StyleProp, ViewStyle } from "react-native";

/**
 * Props for the RNView component.
 */
export interface IPayViewProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * The children components to be rendered inside the View.
   */
  children?: ReactNode;
  /**
   * Style for the View container.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined;

  pointerEvents?: "box-none" | "none" | "box-only" | "auto" | undefined;
}
