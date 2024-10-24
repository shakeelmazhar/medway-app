// ipay-tabs.interface.ts

import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";
import { TabBase } from "utils/enums";

// Import the TabBase enum from utilities/enums

// Define a type alias for individual tabs
type Tab = string;

// Define a type alias for individual tabsWithImage
type TabsIconProp = {
  text: string;
  image?: string;
};

// Define the interface for the props that the RNTabsProps component accepts
interface RNTabsProps {
  // An array of strings representing the tabs to be displayed
  tabs?: Tab[];
  // An array of strings representing the tabs to be displayed

  // An optional callback function called when a tab is selected
  onSelect?: (arg0: string, tabObject: object) => void;
  // An optional callback function called when a tab is selected

  // An optional boolean indicating whether the tabs should be scrollable horizontally
  scrollable?: boolean;
  // An optional boolean indicating whether the tabs should be scrollable horizontally

  // An optional enum representing the variant of the tabs
  variant?: TabBase;

  // An optional style prop allowing custom styles to be applied to the component
  customStyles?: StyleProp<ViewStyle>;
  testID?: string;
  scrollEnabled?: boolean;
  preSelectedTab?: string;
  unSelectedTabStyle?: StyleProp<ViewStyle>;
  tabsIcon?: TabsIconProp[];
  imageStyle?: StyleProp<ImageStyle>;
  tabStyles?: StyleProp<ViewStyle>;
}

interface RNTabsStyles {
  listWrapper: StyleProp<ViewStyle>;
  imageStyle: StyleProp<ImageStyle>;
  selectedTab: ViewStyle;
  unSelectedTab: ViewStyle;
  selected: TextStyle;
  unselected: TextStyle;
  container: ViewStyle;
  scrollContainer: ViewStyle;
  tab: ViewStyle;
  flexTab: ViewStyle;
}

export { RNTabsProps, RNTabsStyles, Tab, TabsIconProp };
