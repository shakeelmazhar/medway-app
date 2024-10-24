/**
 * ? Local Imports
 */
import React from "react";
import icons from "@assets/index";
import { RNFlatlist, RNImage, RNTextWrapper, RNView } from "@components/atoms";
import { RNSessionListTab } from "@components/organisms";
import { RNSafeAreaView } from "@components/tamplates";
import createStyles from "./sessions.style";

interface SessionsScreenProps {}

const SessionsScreen: React.FC<SessionsScreenProps> = () => {
  const styles = createStyles();

  return (
    <RNSafeAreaView style={styles.container}>
      <RNImage image={icons.medwayLogo} style={styles.medwayLogoStyle} />
      <RNTextWrapper style={styles.headingText}>{"Sessions"}</RNTextWrapper>
      <RNView style={styles.contentContainer}>
        <RNFlatlist
          data={[0, 1, 2, 3, 4]}
          renderItem={({ item }) => <RNSessionListTab data={item} />}
          itemSeparatorStyle={styles.itemSeparatorStyle}
          showsVerticalScrollIndicator={false}
        />
      </RNView>
    </RNSafeAreaView>
  );
};

export default SessionsScreen;
