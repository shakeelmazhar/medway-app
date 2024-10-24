import {
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from "react-native";

/**
 * Props for the RNImage component.
 */
export interface RNImageProps {
  /**
   * testID for the flatlist to test the element.
   */
  testID?: string;
  /**
   * Style for the image.
   */
  style?: StyleProp<ImageStyle | ViewStyle>;
  /**
   * Source of the image. It can be a local asset or a URL.
   */
  image?: ImageSourcePropType | string;

  /**
   * image URI to be loaded from assets link
   */
  assetImageURI?: string;

  resizeMode?: ImageResizeMode;
}
