/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#34B17D";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    bg: "#F3F3F4",
    card: "#fff",

    text: "#949494",
    text200: "#949494",
    text900: "#514844",
    icon: "#949494",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,

    brand: "#34B17D",
  },
  dark: {
    bg: "#11181C",
    card: "#2E2E2E",

    text: "#9BA1A6",
    text200: "#9BA1A6",
    text900: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#ECEDEE",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,

    brand: "#34B17D",
  },
};
