import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_32 } from "@theme/spacing";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  medwayLogoStyle: ImageStyle;
  contentContainer: ViewStyle;
  headingText: TextStyle;
  itemSeparatorStyle: ViewStyle;
}

export default () => {
  return createStyleSheet<Style>({
    container: {
      flex: 1,
      padding: moderateScale(16, 0.3),
      backgroundColor: palette.background,
    },
    medwayLogoStyle: {
      width: moderateScale(48),
      height: moderateScale(37),
    },
    headingText: {
      fontFamily: fonts.montserrat.bold,
      fontSize: SCALE_32,
      fontWeight: "700",
      lineHeight: moderateScale(41),
      letterSpacing: moderateScale(0.374),
      color: palette.black,
      marginTop: verticalScale(18),
    },
    contentContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: verticalScale(24),
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: "90%",
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: palette.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: palette.primary,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: palette.text,
      fontWeight: "700",
    },
    itemSeparatorStyle: {
      height: verticalScale(8),
    },
  });
};
