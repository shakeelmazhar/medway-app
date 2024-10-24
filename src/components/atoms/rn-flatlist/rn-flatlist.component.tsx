import React, { forwardRef, useCallback } from "react";
import { FlatList } from "react-native";
import { FlatList as GHFlatList } from "react-native-gesture-handler";
import { RNItemSeparator } from "@components/atoms/index";
import { RNFlatlistProps } from "./rn-flatlist.interface";
import styles from "./rn-flatlist.styles";

const RNFlatlist = forwardRef<FlatList, RNFlatlistProps>(
  (
    {
      testID,
      style,
      data,
      renderItem,
      refreshControl,
      horizontal,
      itemSeparatorStyle,
      isGHFlatlist,
      shouldFlexGrow = true,
      ...rest
    },
    ref,
  ) => {
    const itemSeparator = useCallback(
      () => <RNItemSeparator itemSeparatorStyle={itemSeparatorStyle} />,
      [itemSeparatorStyle],
    );

    if (isGHFlatlist) {
      return (
        <GHFlatList
          testID={`${testID}-GHFlatlist`}
          style={[shouldFlexGrow ? styles.mainContainer : {}, style]}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={() => itemSeparator()}
          refreshControl={refreshControl}
          keyExtractor={(_, index) => index.toString()}
          horizontal={horizontal}
          {...rest}
        />
      );
    }

    return (
      <FlatList
        testID={`${testID}-flatlist`}
        style={[shouldFlexGrow ? styles.mainContainer : {}, style]}
        data={data}
        ref={ref}
        renderItem={renderItem}
        ItemSeparatorComponent={() => itemSeparator()}
        refreshControl={refreshControl}
        keyExtractor={(_, index) => index.toString()}
        horizontal={horizontal}
        {...rest}
      />
    );
  },
);

// Add display name for better debugging
RNFlatlist.displayName = "RNFlatlist";

export default RNFlatlist;
