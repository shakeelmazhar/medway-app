import React from "react";
import SCREENS from "navigation/screeen-names";
import { navigate } from "react-navigation-helpers";
import icons from "@assets/index";
import { RNImage, RNTextWrapper, RNView } from "@components/atoms";
import { RNButton } from "@components/molecules";
import { RNSafeAreaView } from "@components/tamplates";
import { palette } from "@theme/themes";
import onboardingStyles from "./onboarding.style";

const OnboardingScreen: React.FC = () => {
  const styles = onboardingStyles();

  const onPressLogin = () => {
    navigate(SCREENS.LOGIN);
  };

  return (
    <RNSafeAreaView style={styles.container}>
      <RNView style={styles.contentContainer}>
        <RNView style={styles.descriptionView}>
          <RNImage image={icons.medwayLogo} style={styles.medwayLogoStyle} />
          <RNTextWrapper h4 style={styles.descriptionText}>
            {"AI Solution for Healthcare\nBy Physician, for Physician"}
          </RNTextWrapper>
        </RNView>

        <RNView style={styles.btnView}>
          <RNButton
            large
            btnIconsDisabled
            btnText={"Register Now"}
            btnTextColor={palette.white}
            onPress={() => {}}
            style={styles.buttonStyle}
          />
          <RNButton
            large
            btnIconsDisabled
            btnText={"Login to your account"}
            btnTextColor={palette.black}
            buttonColor={palette.ligthPurple}
            onPress={onPressLogin}
          />
        </RNView>
      </RNView>
    </RNSafeAreaView>
  );
};

export default OnboardingScreen;
