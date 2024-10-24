import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  descriptionView: ViewStyle;
  medwayLogoStyle: ImageStyle;
  descriptionText: TextStyle;
  buttonStyle: ViewStyle;
  btnView: ViewStyle;
}

export default () => {
  return createStyleSheet<Style>({
    container: {
      flex: 1,
      padding: moderateScale(16, 0.3),
      backgroundColor: palette.background,
    },
    contentContainer: {
      flex: 1,
    },
    descriptionView: {
      flex: 1,
      alignItems: "center",
      marginTop: moderateScale(120, 0.3),
    },
    medwayLogoStyle: {
      width: moderateScale(48),
      height: moderateScale(37),
    },
    descriptionText: {
      fontFamily: fonts.montserrat.regular,
      fontSize: SCALE_15,
      fontWeight: "600",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.08, 0.3),
      color: palette.black,
      marginTop: verticalScale(12),
    },
    btnView: {
      paddingHorizontal: moderateScale(38, 0.3),
      marginBottom: moderateScale(74, 0.3),
    },
    buttonStyle: {
      marginBottom: verticalScale(12),
    },
  });
};
