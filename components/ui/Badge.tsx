import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

type BadgeProps = {
  color?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
};

const Badge = ({ color = "#FFE9E1", size = "md", children }: BadgeProps) => {
  const sizes: { [key: string]: StyleProp<ViewStyle> } = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large,
  };

  const badgeStyle = sizes[size] || sizes.md;

  return (
    <View style={[styles.badge, badgeStyle, { backgroundColor: color }]}>
      <Text style={styles.text}> {children} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    paddingHorizontal: 4,
  },
  small: {
    height: 18,
  },
  medium: {
    height: 30,
  },
  large: {
    height: 40,
  },
  text: {
    fontSize: 10,
    lineHeight: 16,
    color: "#FE8C68",
  },
});

export default Badge;
