import React, { JSX } from "react";
import { Pressable } from "react-native";
import { RNPressableProps } from "./rn-pressable.interface";
import pressableStyles from "./rn-pressable.style";

const RNPressable: React.FC<RNPressableProps> = ({
  testID,
  children,
  style,
  disabled,
  activeOpacity,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  hitSlop,
  ...rest
}: RNPressableProps): JSX.Element => (
  <Pressable
    testID={`${testID}-pressable`}
    style={({ pressed }) => [
      pressableStyles.container,
      {
        opacity: pressed ? activeOpacity : 1,
      },
      style,
    ]}
    disabled={disabled}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
    onLongPress={onLongPress}
    hitSlop={hitSlop}
    {...rest}
  >
    {children}
  </Pressable>
);

export default RNPressable;
