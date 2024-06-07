import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type BadgeProps = {
  color?: string;
  variant?: "success" | "warning" | "danger";
  children?: React.ReactNode;
};

const Badge = ({
  color = "#FFE9E1",
  variant = "success",
  children,
}: BadgeProps) => {
  const variants: { [key: string]: StyleProp<ViewStyle> } = {
    success: styles.success,
    warning: styles.warning,
    danger: styles.danger,
  };
  const textVariants: { [key: string]: StyleProp<TextStyle> } = {
    success: styles.textSuccess,
    warning: styles.textWarning,
    danger: styles.textDanger,
  };

  const variantStyle = variants[variant];
  const textStyle = textVariants[variant];

  return (
    <View style={[styles.badge, variantStyle, textStyle]}>
      <Text style={textStyle}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    textAlign: "center",
    paddingBottom: 2,
    borderRadius: 12,
    paddingHorizontal: 4,
  },
  success: {
    backgroundColor: "#E9FBE9",
  },
  warning: {
    backgroundColor: "#FFF8E9",
  },
  danger: {
    backgroundColor: "#FFE9E1",
  },

  textSuccess: {
    color: "#008000",
    fontSize: 12,
  },
  textWarning: {
    color: "#FFA500",
    fontSize: 12,
  },
  textDanger: {
    fontSize: 12,
    color: "#FF0000",
  },
});

export default Badge;
