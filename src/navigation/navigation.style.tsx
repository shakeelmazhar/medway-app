import { moderateScale } from "react-native-size-matters";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_10 } from "@theme/spacing";
import { palette } from "@theme/themes";

const navigationStyles = (colors: typeof palette) =>
  createStyleSheet({
    tabNavigationIcon: {
      width: moderateScale(24),
      height: moderateScale(24),
    },
    logoutBtn: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    tabBarText: {
      textAlign: "center",
      fontSize: SCALE_10,
      fontWeight: "500",
      letterSpacing: moderateScale(-0.24),
    },
    logoutText: {
      color: colors.primaryTextColor,
      textAlign: "center",
      fontSize: SCALE_10,
      fontWeight: "500",
      letterSpacing: moderateScale(-0.24),
      marginTop: moderateScale(4),
    },
  });

export default navigationStyles;
