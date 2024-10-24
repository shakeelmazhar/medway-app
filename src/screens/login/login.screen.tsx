import React, { useState } from "react";
import SCREENS from "navigation/screeen-names";
import { replace } from "react-navigation-helpers";
import icons from "@assets/index";
import { RNImage, RNTextWrapper, RNView } from "@components/atoms";
import { RNButton, RNTextInput } from "@components/molecules";
import { RNSafeAreaView } from "@components/tamplates";
import { palette } from "@theme/themes";
import loginStyles from "./login.style";

const LoginScreen: React.FC = () => {
  const styles = loginStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onPressLogin = () => {
    replace(SCREENS.ROOT);
  };

  return (
    <RNSafeAreaView style={styles.container}>
      <RNView style={styles.contentContainer}>
        <RNImage image={icons.backArrow} style={styles.backArrowIcon} />
        <RNTextWrapper style={styles.headingText}>{"Login"}</RNTextWrapper>
        <RNTextInput
          text={email}
          onChangeText={setEmail}
          placeholder={"Email"}
        />
        <RNTextInput
          text={password}
          onChangeText={setPassword}
          placeholder={"Password"}
          containerStyle={styles.inputText}
          icon={icons.eyeOff}
          showLeftIcon
        />
        <RNTextWrapper style={styles.forgetPasswordText}>
          {"Forgot password?"}
        </RNTextWrapper>
      </RNView>

      <RNButton
        large
        btnIconsDisabled
        btnText={"Login"}
        btnTextColor={palette.white}
        onPress={onPressLogin}
        style={styles.buttonStyle}
      />
    </RNSafeAreaView>
  );
};

export default LoginScreen;
