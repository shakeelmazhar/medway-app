import { moderateScale, verticalScale } from "react-native-size-matters";
import { TabBase } from "utils/enums";
import fonts from "@theme/fonts";
import { scaleSize } from "@theme/mixins";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";
import { RNTabsStyles } from "./rn-tabs.interface";

const tabStyles = (colors: typeof palette) =>
  createStyleSheet({
    containerNatural: {
      backgroundColor: colors.background,
      borderRadius: scaleSize(12), // Rounded container edges
    },
    containerColored: {
      backgroundColor: colors.background, // Adjust if you want colored background
      borderRadius: scaleSize(12),
      padding: scaleSize(4),
    },
    scrollContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    tab: {
      height: scaleSize(36),
      paddingHorizontal: scaleSize(16),
      justifyContent: "center",
      alignItems: "center",
    },
    selectedTab: {
      backgroundColor: colors.btnPrimary, // Background for selected tab
      borderRadius: scaleSize(12), // Fully rounded corners for selected tab
    },
    unSelectedTab: {
      flex: 1,
    },
    imageStyle: {
      width: scaleSize(20),
      height: verticalScale(20),
      resizeMode: "contain",
    },
    listWrapper: {
      justifyContent: "center",
      flexDirection: "row",
      alignItems: "center",
    },
  });

const generateStyles = (
  variant: TabBase,
  colors: typeof palette,
): RNTabsStyles => {
  const containerStyles = {
    container:
      variant === TabBase.Natural
        ? tabStyles(colors).containerNatural
        : tabStyles(colors).containerColored,
    scrollContainer: tabStyles(colors).scrollContainer,
    tab: tabStyles(colors).tab,
    imageStyle: tabStyles(colors).imageStyle,
    listWrapper: tabStyles(colors).listWrapper,
  };

  const textColors = {
    selected: {
      color: colors.white, // White text for selected tab
      textAlign: "center",
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_15,
      fontWeight: "500",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.075, 0.3),
    },
    unselected: {
      color: colors.textColor, // Primary color for unselected tab text
      textAlign: "center",
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_15,
      fontWeight: "500",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.075, 0.3),
    },
  };

  const tabColors = {
    selectedTab: tabStyles(colors).selectedTab,
    unSelectedTab: tabStyles(colors).unSelectedTab,
  };

  return createStyleSheet({
    ...containerStyles,
    ...textColors,
    ...tabColors,
  });
};

export { generateStyles, tabStyles };
