import { moderateScale, verticalScale } from "react-native-size-matters";
import fonts from "@theme/fonts";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

const buttonStyles = () =>
  createStyleSheet({
    btnLarge: {
      paddingHorizontal: moderateScale(24, 0.3),
      height: verticalScale(40),
      justifyContent: "center",
      borderRadius: moderateScale(8),
    },
    btnMedium: {
      paddingHorizontal: moderateScale(14, 0.3),
      paddingVertical: verticalScale(7),
      justifyContent: "center",
      height: verticalScale(34),
      borderRadius: moderateScale(8),
    },
    btnSmall: {
      paddingHorizontal: moderateScale(6, 0.3),
      paddingVertical: verticalScale(4),
      height: verticalScale(28),
      justifyContent: "center",
      borderRadius: moderateScale(8),
    },
    childContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    btnText: {
      marginHorizontal: moderateScale(6, 0.3),
      color: palette.white,
      fontFamily: fonts.montserrat.regular,
      fontSize: SCALE_15,
      fontWeight: "600",
      lineHeight: moderateScale(22, 0.3),
      letterSpacing: moderateScale(-0.408, 0.3),
    },
    btnIconStyle: {
      height: verticalScale(14),
      width: verticalScale(14),
      marginEnd: moderateScale(8, 0.3),
    },
  });

export default buttonStyles;
