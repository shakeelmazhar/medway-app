import React from "react";
import RNText from "@freakycoder/react-native-custom-text";
import fonts from "@theme/fonts";
import { ITextWrapperProps } from "./rn-text.interface";

const RNTextWrapper: React.FC<ITextWrapperProps> = ({
  fontFamily = fonts.montserrat.regular,
  color,
  children,
  ...rest
}) => {
  return (
    <RNText fontFamily={fontFamily} color={color} {...rest}>
      {children}
    </RNText>
  );
};

export default RNTextWrapper;
