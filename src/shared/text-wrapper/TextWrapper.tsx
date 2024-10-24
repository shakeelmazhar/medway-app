import React from "react";
import fonts from "theme/fonts";
import { palette } from "theme/themes";
import RNText, {
  type IRNTextProps,
} from "@freakycoder/react-native-custom-text";

interface ITextWrapperProps extends IRNTextProps {
  color?: string;
  fontFamily?: string;
  children?: React.ReactNode;
}

const TextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.montserrat.regular,
  color = palette.shadow,
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default TextWrapper;
