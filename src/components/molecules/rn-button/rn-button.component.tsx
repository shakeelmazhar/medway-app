/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import {
  RNImage,
  RNPressable,
  RNTextWrapper,
  RNView,
} from "@components/atoms/index";
import { palette } from "@theme/themes";
import { RNButtonProps } from "./rn-button.interface";
import buttonStyles from "./rn-button.style";

const RNButton: React.FC<RNButtonProps> = ({
  disabled,
  testID,
  small,
  medium,
  large,
  width,
  btnText,
  buttonColor,
  style,
  onPress,
  btnIconsDisabled,
  btnTextColor,
  textStyle,
  btnIcon,
  btnIconColor,
}) => {
  const styles = buttonStyles();

  const buttonBackgroundColor = disabled
    ? palette.blackOverlay
    : buttonColor || palette.btnPrimary;
  const btnStyle = useMemo(() => {
    if (small)
      return [
        styles.btnSmall,
        { width, backgroundColor: buttonBackgroundColor },
      ];
    if (medium)
      return [
        styles.btnMedium,
        { width, backgroundColor: buttonBackgroundColor },
      ];
    if (large)
      return [
        styles.btnLarge,
        { width, backgroundColor: buttonBackgroundColor },
      ];
    return {};
  }, [small, medium, large, width, buttonBackgroundColor]);

  return (
    <RNPressable
      testID={testID}
      disabled={disabled}
      onPress={onPress}
      style={[btnStyle, style]}
    >
      <RNView style={styles.childContainer}>
        {!btnIconsDisabled && (
          <RNImage
            image={btnIcon}
            style={[styles.btnIconStyle, { tintColor: btnIconColor }]}
          />
        )}
        <RNTextWrapper style={[styles.btnText, textStyle]} color={btnTextColor}>
          {btnText}
        </RNTextWrapper>
      </RNView>
    </RNPressable>
  );
};

export default RNButton;
