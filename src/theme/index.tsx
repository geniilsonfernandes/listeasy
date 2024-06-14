import { createTheme } from "@shopify/restyle";

const lightThemeColors = {
  bg100: "#FFFFFF",
  bg200: "#F0F0F0",
  bg300: "#E0E0E0",
  bg400: "#D0D0D0",
  bg500: "#C0C0C0",
  bg600: "#B0B0B0",
  bg700: "#A0A0A0",
  bg800: "#909090",
  bg900: "#808080",

  text100: "#514844",
  text200: "#808080",
  text300: "#909090",
  text400: "#A0A0A0",
  text500: "#B0B0B0",
  text600: "#D0D0D0",
  text700: "#E0E0E0",
  text800: "#F0F0F0",
  text900: "#FFFFFF",
};

const blueThemeColors = {
  bg100: "#E3F2FD", // Light Blue
  bg200: "#BBDEFB", // Light Blue
  bg300: "#90CAF9", // Light Blue
  bg400: "#64B5F6", // Light Blue
  bg500: "#42A5F5", // Blue
  bg600: "#2196F3", // Blue
  bg700: "#1E88E5", // Blue
  bg800: "#1976D2", // Dark Blue
  bg900: "#1565C0", // Dark Blue

  text100: "#0D47A1", // Darker Blue
  text200: "#1565C0", // Dark Blue
  text300: "#1976D2", // Dark Blue
  text400: "#1E88E5", // Blue
  text500: "#2196F3", // Blue
  text600: "#42A5F5", // Light Blue
  text700: "#64B5F6", // Light Blue
  text800: "#90CAF9", // Light Blue
  text900: "#E3F2FD", // Light Blue
};

const darkThemeColors = {
  bg100: "#272829",
  bg200: "#333333",
  bg300: "#404040",
  bg400: "#505050",
  bg500: "#606060",
  bg600: "#707070",
  bg700: "#808080",
  bg800: "#909090",
  bg900: "#A0A0A0",

  text100: "#FFFFFF",
  text200: "#E0E0E0",
  text300: "#D0D0D0",
  text400: "#C0C0C0",
  text500: "#B0B0B0",
  text600: "#A0A0A0",
  text700: "#909090",
  text800: "#808080",
  text900: "#707070",
};

const palette = {
  purpleLight: "#8C6FF7",
  purplePrimary: "#5A31F4",
  purpleDark: "#3F22AB",

  greenLight: "#56DCBA",
  greenPrimary: "#0ECD9D",
  greenDark: "#0A906E",

  successBackground: "#E9FBE9",
  warningBackground: "#FFF8E9",
  dangerBackground: "#FFE9E1",
  successText: "#008000",
  warningText: "#FFA500",
  dangerText: "#FF0000",

  black: "#0B0B0B",
  white: "#FFF",
  red: "#FF0B4C",
};

const designSystem = {
  spacing: {
    "-m": -16,
    "-s": -8,
    "-xs": -4,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },

  textVariants: {
    header: {
      fontSize: 34,
    },
    body: {
      fontSize: 14,
    },
    title: {
      fontSize: 16,
    },
    subtitle: {
      fontSize: 14,
    },
    small: {
      fontSize: 12,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    ...palette,
    ...lightThemeColors,
  },
  ...designSystem,
});

const darkTheme = createTheme({
  colors: {
    mainBackground: palette.black,
    cardPrimaryBackground: palette.purplePrimary,
    ...palette,
    ...darkThemeColors,
  },
  ...designSystem,
});

const blueTheme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    ...palette,
    ...blueThemeColors,
  },
  ...designSystem,
});

export type Theme = typeof theme;
export type DarkTheme = typeof darkTheme;
export type BlueTheme = typeof blueTheme;

export { blueTheme, darkTheme, theme };
export default theme;
