import { moderateScale, verticalScale } from "react-native-size-matters";
import createStyleSheet from "@theme/scaled-sheet";
import { SCALE_15 } from "@theme/spacing";
import { palette } from "@theme/themes";

const dropdownStyles = () =>
  createStyleSheet({
    dropdown: {
      height: verticalScale(42),
      borderWidth: moderateScale(1),
      borderColor: palette.borderColor,
      borderRadius: moderateScale(12),
      padding: moderateScale(12),
    },
    icon: {
      marginRight: moderateScale(5),
    },
    item: {
      padding: moderateScale(17),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: SCALE_15,
      color: palette.textColor,
    },
    placeholderStyle: {
      fontSize: SCALE_15,
      color: palette.placeholder,
    },
    selectedTextStyle: {
      fontSize: SCALE_15,
      color: palette.textColor,
    },
    iconStyle: {
      width: moderateScale(20),
      height: moderateScale(20),
    },
    inputSearchStyle: {
      height: verticalScale(32),
      fontSize: SCALE_15,
      color: palette.textColor,
    },
  });

export default dropdownStyles;
