import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  profilePicImageStyle: ImageStyle;
  medwayLogoStyle: ImageStyle;
  headingText: TextStyle;
  dropdownView: ViewStyle;
  childContainer: ViewStyle;
}

export default (colors: typeof palette) => {
  return createStyleSheet<Style>({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: moderateScale(16, 0.3),
      backgroundColor: colors.background,
    },
    childContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      marginTop: verticalScale(34),
    },
    dropdownView: {
      marginTop: verticalScale(12),
    },
    headingText: {
      fontFamily: fonts.montserrat.semiBold,
      fontSize: SCALE_15,
      fontWeight: "600",
      letterSpacing: moderateScale(0.07),
      color: palette.primaryTextColor,
      marginBottom: verticalScale(8),
    },
    buttonTextStyle: {
      color: colors.white,
      fontWeight: "700",
    },
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    contentContainer: {
      padding: moderateScale(24, 0.3),
      borderRadius: moderateScale(12),
      backgroundColor: colors.secondaryBackground,
    },
    listContainer: {
      marginTop: 8,
    },
    profilePicImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 30,
    },
    medwayLogoStyle: {
      width: moderateScale(48),
      height: moderateScale(37),
    },
  });
};
