import React from "react";
import { RNView } from "@components/atoms/index";
import { RNItemSeparatorProps } from "./rn-item-separator.interface";
import styles from "./rn-item-separator.style";

const RNItemSeparator: React.FC<RNItemSeparatorProps> = ({
  testID,
  itemSeparatorStyle,
}) => (
  <RNView
    testID={`${testID}-item-separator`}
    style={[styles.container, itemSeparatorStyle]}
  />
);

export default RNItemSeparator;
