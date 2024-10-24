import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_14, SCALE_34 } from "@theme/spacing";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  backArrowIcon: ImageStyle;
  headingText: TextStyle;
  inputText: ViewStyle;
  buttonStyle: ViewStyle;
  forgetPasswordText: ViewStyle;
}

export default () => {
  return createStyleSheet<Style>({
    container: {
      flex: 1,
      padding: moderateScale(16, 0.3),
      backgroundColor: palette.background,
    },
    contentContainer: {
      flex: 0.95,
    },
    backArrowIcon: {
      width: moderateScale(18, 0.3),
      height: moderateScale(24, 0.3),
    },
    headingText: {
      fontFamily: fonts.montserrat.bold,
      fontWeight: "700",
      fontSize: SCALE_34,
      lineHeight: moderateScale(41, 0.3),
      letterSpacing: moderateScale(0.374, 0.3),
      marginVertical: moderateScale(30, 0.3),
    },
    inputText: {
      marginTop: verticalScale(14),
    },
    forgetPasswordText: {
      fontFamily: fonts.montserrat.regular,
      fontWeight: "500",
      fontSize: SCALE_14,
      letterSpacing: moderateScale(0.07, 0.3),
      marginTop: verticalScale(24),
      textAlign: "right",
      color: palette.textColor,
    },
    buttonStyle: {
      //   marginBottom: verticalScale(24),
    },
  });
};
