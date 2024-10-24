import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_12, SCALE_13, SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

const sessionListTabStyles = () =>
  createStyleSheet({
    container: {
      width: moderateScale(342, 0.3),
      paddingHorizontal: moderateScale(12, 0.3),
      paddingVertical: verticalScale(8),
      backgroundColor: palette.white,
      borderRadius: moderateScale(8),
      gap: moderateScale(10, 0.3),
    },
    dateTimeView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: verticalScale(5),
      marginBottom: verticalScale(10),
    },
    dateTimeText: {
      fontFamily: fonts.montserrat.regular,
      fontSize: SCALE_12,
      fontWeight: "400",
      lineHeight: moderateScale(16, 0.3),
      letterSpacing: moderateScale(0.06),
      color: palette.gray700,
    },
    statusView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    status: {
      paddingHorizontal: moderateScale(8, 0.3),
      paddingVertical: moderateScale(3, 0.3),
      borderRadius: moderateScale(16),
      alignItems: "center",
    },
    statusText: {
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_12,
      fontWeight: "500",
      lineHeight: moderateScale(18, 0.3),
      textAlign: "center",
    },
    nameText: {
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_15,
      fontWeight: "500",
      lineHeight: moderateScale(24, 0.3),
      letterSpacing: moderateScale(0.08),
      color: palette.gray700,
    },
    btnStyle: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: moderateScale(20),
      paddingHorizontal: moderateScale(16, 0.3),
    },
    btnTextStyle: {
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_13,
      fontWeight: "600",
      lineHeight: moderateScale(20, 3),
      letterSpacing: moderateScale(-0.5),
    },
    complaintsContainer: {
      borderTopWidth: moderateScale(0.17, 0.3),
      borderTopColor: palette.gray500,
      paddingVertical: verticalScale(16),
    },
    complaintsView: {
      flex: 1,
    },
    itemSeparatorStyle: {
      height: moderateScale(10),
    },
    complaintsTitleText: {
      fontFamily: fonts.montserrat.medium,
      fontSize: SCALE_15,
      fontWeight: "500",
      lineHeight: moderateScale(24, 0.3),
      color: palette.gray900,
      marginBottom: verticalScale(12),
    },
    complaintsDetailsText: {
      fontFamily: fonts.montserrat.regular,
      fontSize: SCALE_15,
      fontWeight: "400",
      lineHeight: moderateScale(24, 0.3),
      color: palette.primaryTextColor,
    },
  });

export default sessionListTabStyles;
