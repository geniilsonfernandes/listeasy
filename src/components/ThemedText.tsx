import { Text, type TextProps } from "react-native";

import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  color?: keyof typeof Colors.light & keyof typeof Colors.dark;
  fontFamily?: keyof typeof Fonts;
  size?: number;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  fontFamily,
  size,
  color = "text",
  ...rest
}: ThemedTextProps) {
  const colorThme = useThemeColor(
    { light: lightColor, dark: darkColor },
    color
  );

  return (
    <Text
      style={{
        fontSize: size || 16,
        color: colorThme,
        fontFamily: fontFamily,
      }}
      {...rest}
    />
  );
}
