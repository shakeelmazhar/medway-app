import React, { useEffect, useState } from "react";
import { ScrollView, ViewStyle } from "react-native";
import { TabBase } from "utils/enums";
import { RNPressable, RNTextWrapper, RNView } from "@components/atoms";
import { palette } from "@theme/themes";
import { RNTabsProps } from "./rn-tabs.interface";
import { generateStyles } from "./rn-tabs.style";

const RBTabs: React.FC<RNTabsProps> = ({
  testID,
  tabs,
  onSelect,
  scrollable = false,
  variant = TabBase.Natural,
  customStyles,
  scrollEnabled,
  preSelectedTab,
  unSelectedTabStyle,
  tabStyles,
}) => {
  const tabsData = tabs;
  const defaultTab =
    typeof tabsData?.[0] !== "string" ? tabsData?.[0]?.text : tabsData?.[0];
  const [selectedTab, setSelectedTab] = useState<string | undefined>(
    defaultTab,
  );
  const styles = generateStyles(variant, palette); // Generate styles based on variant

  useEffect(() => {
    if (preSelectedTab) setSelectedTab(preSelectedTab);
  }, [preSelectedTab]);

  const handleTabClick = (tab: string, tabObject: {}) => {
    setSelectedTab(tab);
    if (onSelect) onSelect(tab, tabObject);
  };

  const getTabStyle = (isSelected: boolean) => [
    styles.tab,
    isSelected
      ? styles.selectedTab
      : [styles.unSelectedTab, unSelectedTabStyle],
    !scrollable && styles.flexTab,
    isSelected
      ? styles.selectedTab
      : [styles.unSelectedTab, unSelectedTabStyle],
    !scrollable && styles.flexTab,
  ];

  return (
    <RNView style={[styles.container, customStyles as ViewStyle]}>
      <ScrollView
        horizontal={scrollable}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        scrollEnabled={scrollEnabled}
      >
        {tabsData?.map((tab, index) => {
          const tabText = typeof tab !== "string" ? tab?.text : tab;
          return (
            <RNPressable
              testID={`${testID}-${tabText}-tab`}
              key={`${index + 1}`}
              style={[getTabStyle(tabText === selectedTab), tabStyles]}
              onPress={() => handleTabClick(tabText, tab)}
            >
              <RNTextWrapper
                style={
                  tabText === selectedTab ? styles.selected : styles.unselected
                }
              >
                {tabText}
              </RNTextWrapper>
            </RNPressable>
          );
        })}
      </ScrollView>
    </RNView>
  );
};

export default RBTabs;
