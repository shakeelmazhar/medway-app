import { scaleSize } from "theme/mixins";
import createStyleSheet from "theme/scaled-sheet";
import { palette } from "@theme/themes";

const textInputStyles = (colors: typeof palette) =>
  createStyleSheet({
    container: {
      height: scaleSize(56),
      borderRadius: scaleSize(22),
      borderWidth: 1,
      paddingHorizontal: scaleSize(20),
      paddingVertical: scaleSize(10),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    },
    label: {
      color: colors.primaryTextColor,
    },
    iconAndInputStyles: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      gap: scaleSize(8),
    },
    textInputStyle: {
      color: colors.textColor,
      textAlign: "right",
    },
    outerView: {
      flex: 1,
    },
    disabledContainer: {
      backgroundColor: colors.textColor,
      borderColor: colors.textColor,
    },
    outerWrapper: {
      gap: scaleSize(8),
    },
    disableLabel: {
      color: colors.primaryTextColor,
    },
    errorAssistiveTextText: {
      color: colors.red,
    },
    assistiveText: {
      color: colors.textColor,
    },
    closeIcon: {
      backgroundColor: "transparent",
      paddingVertical: scaleSize(10),
      paddingLeft: scaleSize(10),
    },
  });

export default textInputStyles;
