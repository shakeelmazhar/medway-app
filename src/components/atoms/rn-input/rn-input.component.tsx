import React, { forwardRef } from "react";
import { ReturnKeyTypeOptions, TextInput } from "react-native";
import { palette } from "theme/themes";
import { RNTextInputProps } from "./rn-input.interface";
import textInputStyles from "./rn-input.style";

const RNInput = forwardRef(
  (props: RNTextInputProps, ref: React.ForwardedRef<TextInput>) => {
    const {
      testID,
      text = "",
      style,
      numberOfLines,
      placeholder = "",
      autoCapitalize,
      autoFocus,
      maxLength,
      multiline,
      keyboardType,
      onChangeText,
      onSubmitEditing,
      handleFocus,
      handleBlur,
      caretHidden,
      editable = true,
      blurOnSubmit,
      selectionColor,
      returnKeyLabel = "done",
      placeholderTextColor,
    } = props;

    const styles = textInputStyles(palette);

    return (
      <TextInput
        testID={`${testID}-input`}
        value={text}
        numberOfLines={numberOfLines}
        style={[styles.textInputStyle, style]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor ?? palette.placeholder}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        maxLength={maxLength}
        multiline={multiline}
        keyboardType={keyboardType}
        onBlur={handleBlur}
        onFocus={handleFocus}
        caretHidden={caretHidden}
        onChangeText={onChangeText}
        onSubmitEditing={() => onSubmitEditing && onSubmitEditing(text)}
        editable={editable}
        blurOnSubmit={blurOnSubmit}
        returnKeyType={returnKeyLabel as ReturnKeyTypeOptions}
        selectionColor={selectionColor}
        ref={ref}
      />
    );
  },
);

// Set display name
RNInput.displayName = "RNInput";

export default RNInput;
