/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import {
  RNImage,
  RNInput,
  RNPressable,
  RNTextWrapper,
  RNView,
} from "@components/atoms/index";
import { palette } from "@theme/themes";
import RNButton from "../rn-button/rn-button.component";
import { RNTextInputProps } from "./rn-text-input.interface";
import textInputStyles from "./rn-text-input.style";

const RNTextInput: React.FC<RNTextInputProps> = ({
  testID,
  text,
  style,
  placeholder,
  placeholderTextColor,
  autoCapitalize,
  maxLength,
  multiline,
  keyboardType,
  onBlur,
  onChangeText,
  onFocus,
  onSubmitEditing,
  containerStyle = {},
  isError,
  assistiveText,
  editable = true,
  onPressCancle,
  closeIconStyle,
  showLeftIcon,
  leftIcon,
  onClearInput,
  caretHidden,
  returnKeyLabel,
  assistiveTextStyle,
  showFocusStyle,
  showCancleButton = false,
  icon,
  titleText,
  titleTextStyle,
}: RNTextInputProps): React.JSX.Element => {
  const styles = textInputStyles(palette);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const handleFocus = () => {
    setIsFocused(true);
    if (onFocus) onFocus();
  };

  useEffect(() => {
    setIsFocused(!!showFocusStyle);
  }, [showFocusStyle]);

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  return (
    <RNView testID={`${testID}-text-input`} style={styles.outerWrapper}>
      {titleText && (
        <RNTextWrapper style={[styles.titleStyle, titleTextStyle]}>
          {titleText}
        </RNTextWrapper>
      )}
      <RNView
        style={[
          styles.container,
          isFocused && styles.focusedContainer,
          isError && styles.errorContainer,
          !editable && styles.disabledContainer,
          containerStyle,
        ]}
      >
        <RNView style={styles.container2}>
          <RNView style={styles.iconAndInputStyles}>
            <RNView style={styles.outerView}>
              <RNInput
                isFocused={isFocused}
                returnKeyLabel={returnKeyLabel}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                testID={testID}
                text={text}
                style={[styles.inputTextStyle, style]}
                caretHidden={caretHidden}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                autoCapitalize={autoCapitalize}
                maxLength={maxLength}
                multiline={multiline}
                keyboardType={keyboardType}
                onBlur={onBlur}
                onFocus={onFocus}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                editable={editable}
              />
            </RNView>
          </RNView>
          {showLeftIcon && (
            <RNPressable
              activeOpacity={1}
              style={[styles.closeIcon, closeIconStyle]}
              onPressIn={onClearInput}
            >
              {leftIcon || <RNImage image={icon} style={styles.iconStyle} />}
            </RNPressable>
          )}
        </RNView>
        {showCancleButton && (
          <RNButton
            btnText="Cancel"
            onPress={onPressCancle}
            style={styles.cancleButton}
            textColor={palette.btnPrimary}
            btnIconsDisabled
          />
        )}
      </RNView>

      {assistiveText && (
        <RNTextWrapper
          style={[
            isError ? styles.errorAssistiveTextText : styles.assistiveText,
            assistiveTextStyle,
          ]}
        >
          {assistiveText}
        </RNTextWrapper>
      )}
    </RNView>
  );
};

export default RNTextInput;
