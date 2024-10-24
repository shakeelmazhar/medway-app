import createStyleSheet from "@theme/scaled-sheet";

const safeAreaViewStyles = () =>
  createStyleSheet({
    container: {
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
  });

export default safeAreaViewStyles;
