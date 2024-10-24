import React, { useState } from "react";
import icons from "@assets/index";
import { RNImage, RNTextWrapper, RNView } from "@components/atoms";
import { RBTabs, RNButton, RNTextInput } from "@components/molecules";
import { RNSafeAreaView } from "@components/tamplates";
import { palette } from "@theme/themes";
import recordingStyle from "./recording.style";

const tabs = ["Comments", "Make Part of Note"];

const RecordingScreen: React.FC = () => {
  const [comment, setComment] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);
  const styles = recordingStyle();

  const onSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <RNSafeAreaView style={styles.container}>
      <RNView style={styles.contentContainer}>
        <RNView style={styles.recordingView}>
          <RNTextWrapper style={styles.sessionTitleText}>
            {"John Doe"}
          </RNTextWrapper>
          <RNView style={styles.recordingBtnView}>
            <RNView style={styles.timerView}>
              <RNImage image={icons.timer} style={styles.timerIcon} />
              <RNTextWrapper style={styles.timerText}>
                {"00:08:32"}
              </RNTextWrapper>
            </RNView>
            <RNButton
              medium
              btnText={"Resume"}
              buttonColor={palette.success500}
              btnIcon={icons.pause}
              style={styles.resumeBtn}
              textStyle={styles.btnText}
              onPress={() => {}}
            />
          </RNView>
          <RNButton
            large
            btnText={"End Recording"}
            buttonColor={palette.red}
            btnIcon={icons.stop}
            style={styles.stopRecordingBtn}
            textStyle={styles.btnText}
            onPress={() => {}}
          />
        </RNView>
        <RNView style={styles.descriptionView}>
          <RBTabs tabs={tabs} onSelect={onSelectTab} />
          <RNTextInput
            text={selectedTab === tabs[0] ? comment : note}
            onChangeText={selectedTab === tabs[0] ? setComment : setNote}
            style={styles.textInput}
            multiline
            containerStyle={styles.inputTextContainer}
          />
        </RNView>
      </RNView>
    </RNSafeAreaView>
  );
};

export default RecordingScreen;
