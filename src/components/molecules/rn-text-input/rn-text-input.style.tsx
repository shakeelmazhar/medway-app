import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import { scaleSize } from "@theme/mixins";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

const textInputStyles = (themeColors: typeof palette) =>
  createStyleSheet({
    container: {
      height: verticalScale(40),
      borderRadius: scaleSize(8),
      borderWidth: 1,
      borderColor: themeColors.borderColor,
      paddingHorizontal: scaleSize(10),
      paddingVertical: scaleSize(10),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    titleStyle: {
      fontFamily: fonts.montserrat.semiBold,
      fontSize: SCALE_15,
      fontWeight: "600",
      letterSpacing: moderateScale(0.07),
      color: themeColors.primaryTextColor,
    },
    label: {
      color: themeColors.textColor,
    },
    iconAndInputStyles: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: scaleSize(12),
    },
    textInputStyle: {
      color: themeColors.textColor,
      justifyContent: "center",
    },
    outerView: {
      flex: 1,
      paddingTop: moderateScale(2),
    },
    errorContainer: {
      borderColor: themeColors.red,
    },
    focusedContainer: {
      borderColor: themeColors.btnPrimary,
    },
    disabledContainer: {
      borderColor: themeColors.borderColor,
    },
    outerWrapper: {
      gap: scaleSize(8),
    },
    disableLabel: {
      color: themeColors.borderColor,
    },
    errorAssistiveTextText: {
      color: themeColors.red,
      width: scaleSize(140),
    },
    assistiveText: {
      color: themeColors.textColor,
    },
    container2: {
      flexDirection: "row",
      gap: moderateScale(4),
      justifyContent: "space-between",
      alignItems: "center",
    },
    cancleButton: { marginHorizontal: moderateScale(12) },
    inputTextStyle: {
      textAlign: "left",
      fontSize: SCALE_15,
    },
    closeIcon: {},
    iconStyle: {
      alignSelf: "center",
      width: moderateScale(16),
      height: moderateScale(16),
    },
  });

export default textInputStyles;
