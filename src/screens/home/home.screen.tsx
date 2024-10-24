import React, { useState } from "react";
import { navigate } from "react-navigation-helpers";
import icons from "@assets/index";
import { RNImage, RNTextWrapper, RNView } from "@components/atoms";
import { RNButton, RNTextInput } from "@components/molecules";
import { RNDropdown } from "@components/organisms";
import { RNSafeAreaView } from "@components/tamplates";
import { palette } from "@theme/themes";
import homeStyles from "./home.style";
import MockData from "./mock/MockData";

const HomeScreen: React.FC = () => {
  const styles = homeStyles(palette);
  const [sessionTitle, setSesionTitle] = useState<string>("");

  const onPressStartRecording = () => {
    // navigate(SCREENS.RECORDING);
    navigate("AudioRecorder");
  };

  return (
    <RNSafeAreaView style={styles.container}>
      <RNView>
        <RNImage image={icons.medwayLogo} style={styles.medwayLogoStyle} />
        <RNView style={styles.childContainer}>
          <RNView style={styles.contentContainer}>
            <RNTextInput
              titleText={"Patient/Session Title"}
              text={sessionTitle}
              onChangeText={setSesionTitle}
              placeholder={"Patient/Session Title"}
              placeholderTextColor={palette.placeholder}
            />

            <RNView style={styles.dropdownView}>
              <RNTextWrapper style={styles.headingText}>
                {"Select Template"}
              </RNTextWrapper>
              <RNDropdown data={MockData} placeholder="Select Template" />
            </RNView>

            <RNButton
              large
              btnIcon={icons.mic}
              btnText={"Start Recording"}
              btnTextColor={palette.white}
              btnIconColor={palette.white}
              onPress={onPressStartRecording}
              style={styles.buttonStyle}
            />
          </RNView>
        </RNView>
      </RNView>
    </RNSafeAreaView>
  );
};

export default HomeScreen;
