import { DefaultTheme, type ExtendedTheme } from "@react-navigation/native";

const palette = {
  primary: "#0564d4",
  btnPrimary: "#5755E8",
  secondary: "#ff6a00",
  secondaryBackground: "#f6f8fa",
  background: "#EDEDF7",
  white: "#fff",
  black: "#000",
  button: "#1c1e21",
  shadow: "#757575",
  text: "#30363b",
  borderColor: "#d0d7de",
  borderColorDark: "#333942",
  placeholder: "#a1a1a1",
  danger: "rgb(208, 2, 27)",
  title: "rgb(102, 102, 102)",
  separator: "rgb(194, 194, 195)",
  highlight: "rgb(199, 198, 203)",
  blackOverlay: "rgba(0,0,0,0.6)",
  iconWhite: "#fff",
  iconBlack: "#101214",
  dynamicWhite: "#fff",
  dynamicBlack: "#1c1e21",
  dynamicBackground: "#fff",
  transparent: "transparent",
  calpyse: "#2b7488",
  red: "#EF4444",
  primaryTextColor: "#1F2937",
  textColor: "#6B7280",
  borderColor2: "#E5E7EB",
  gray900: "#101828",
  gray500: "#667085",
  gray700: "#344054",
  gray400: "#525459",
  gray100: "#F8FAFC",
  gray50: "#E7E7E7",
  success50: "#ECFDF3",
  success500: "#14B8A6",
  success700: "#027A48",
  ligthPurple: "#E2E1F9",
};

const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark,
  },
};

export { DarkTheme, LightTheme, palette };
