import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_12, SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

interface Style {
  container: ViewStyle;
  contentContainer: ViewStyle;
  recordingView: ViewStyle;
  sessionTitleText: TextStyle;
  recordingBtnView: ViewStyle;
  resumeBtn: ViewStyle;
  btnText: TextStyle;
  timerView: ViewStyle;
  timerText: TextStyle;
  timerIcon: ImageStyle;
  stopRecordingBtn: ViewStyle;
  descriptionView: ViewStyle;
  inputTextContainer: ViewStyle;
  textInput: TextStyle;
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
    recordingView: {
      padding: moderateScale(24, 0.3),
      borderRadius: moderateScale(8),
      backgroundColor: palette.white,
    },
    sessionTitleText: {
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_12,
      fontWeight: "500",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.08),
      color: palette.primaryTextColor,
    },
    recordingBtnView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: verticalScale(14),
    },
    resumeBtn: {
      height: verticalScale(54),
      width: moderateScale(130, 0.3),
    },
    btnText: {
      fontFamily: fonts.montserrat.semiBold,
      fontSize: SCALE_15,
      fontWeight: "600",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.075),
      color: palette.white,
    },
    timerView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: palette.gray100,
      height: verticalScale(54),
      width: moderateScale(162, 0.3),
      borderRadius: moderateScale(8),
    },
    timerIcon: {
      width: moderateScale(15, 0.3),
      height: moderateScale(15, 0.3),
      marginEnd: moderateScale(8, 0.3),
    },
    timerText: {
      fontFamily: fonts.montserrat.semiBold,
      fontSize: SCALE_15,
      fontWeight: "600",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.075),
      color: palette.textColor,
    },
    stopRecordingBtn: {
      height: verticalScale(54),
    },
    descriptionView: {
      padding: moderateScale(24, 0.3),
      borderRadius: moderateScale(8),
      backgroundColor: palette.white,
      marginTop: verticalScale(40),
    },
    inputTextContainer: {
      height: verticalScale(220),
      marginTop: verticalScale(8),
      paddingVertical: verticalScale(8),
    },
    textInput: {
      height: verticalScale(200),
    },
  });
};
