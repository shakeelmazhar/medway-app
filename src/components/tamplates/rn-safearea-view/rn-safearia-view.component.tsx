import React, { JSX } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RNSafeAreaViewProps } from "./rn-safearia-view.interface";
import safeAreaViewStyles from "./rn-safearia-view.style";

const RNSafeAreaView: React.FC<RNSafeAreaViewProps> = ({
  testID,
  children,
  style,
}: RNSafeAreaViewProps): JSX.Element => {
  const styles = safeAreaViewStyles();

  return (
    <SafeAreaView
      testID={`${testID}-safearea-view`}
      style={[styles.safeAreaView, style]}
      edges={["top", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
};

export default RNSafeAreaView;
