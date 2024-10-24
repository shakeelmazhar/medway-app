import React, { useState } from "react";
import { RNFlatlist, RNTextWrapper, RNView } from "@components/atoms";
import { RNButton } from "@components/molecules";
import { palette } from "@theme/themes";
import {
  ComplaintsProps,
  RNSessionListTabProps,
} from "./rn-session-list-tab.interface";
import sessionListTabStyles from "./rn-session-list-tab.style";

const complaint = [
  {
    id: 1,
    title: "Chief Complaint",
    details:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. ",
  },
  {
    id: 2,
    title: "Chief Complaint",
    details:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. ",
  },
  {
    id: 3,
    title: "Chief Complaint",
    details:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. ",
  },
  {
    id: 4,
    title: "Chief Complaint",
    details:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. ",
  },
];

const RNSessionListTab: React.FC<RNSessionListTabProps> = ({
  testID,
  style,
  data,
}) => {
  const styles = sessionListTabStyles();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const inProgress = false;
  const onPressBtn = () => {
    setIsVisible(!isVisible);
  };

  const renderComplaints = ({ item }: { item: ComplaintsProps }) => {
    return (
      <RNView style={styles.complaintsView}>
        <RNTextWrapper style={styles.complaintsTitleText}>
          {item?.title}
        </RNTextWrapper>
        <RNTextWrapper>{item?.details}</RNTextWrapper>
      </RNView>
    );
  };

  return (
    <RNView
      testID={`${testID}-session-list-tab`}
      style={[styles.container, style]}
    >
      <RNTextWrapper style={styles.nameText}>
        {"John Alex Kingston"}
      </RNTextWrapper>
      <RNView style={styles.dateTimeView}>
        <RNTextWrapper style={styles.dateTimeText}>
          {"27 Aug 2024"}
        </RNTextWrapper>
        <RNTextWrapper style={styles.dateTimeText}>{"15:03"}</RNTextWrapper>
      </RNView>
      <RNView style={styles.statusView}>
        <RNView
          style={[
            styles.status,
            {
              backgroundColor: inProgress ? palette.gray50 : palette.success50,
            },
          ]}
        >
          <RNTextWrapper
            style={[
              styles.statusText,
              {
                color: inProgress ? palette.gray400 : palette.success700,
              },
            ]}
          >
            {inProgress ? "Inprogress" : "Completed"}
          </RNTextWrapper>
        </RNView>
        <RNButton
          btnText={isVisible ? "Close" : "View"}
          small
          btnIconsDisabled
          textStyle={styles.btnTextStyle}
          style={styles.btnStyle}
          onPress={onPressBtn}
        />
      </RNView>
      {isVisible && (
        <RNView style={styles.complaintsContainer}>
          <RNFlatlist
            data={complaint}
            renderItem={renderComplaints}
            itemSeparatorStyle={styles.itemSeparatorStyle}
          />
        </RNView>
      )}
    </RNView>
  );
};

export default RNSessionListTab;
