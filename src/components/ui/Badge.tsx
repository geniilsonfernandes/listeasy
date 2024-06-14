import theme from "@/theme";
import React from "react";
import { Box, Text } from ".";

type BadgeProps = {
  text?: string;
  variant?: "success" | "warning" | "danger";
};

const Badge = ({ text = "badge", variant }: BadgeProps) => {
  const bg = `${variant}Background` as keyof typeof theme.colors;
  const color = `${variant}Text` as keyof typeof theme.colors;
  return (
    <Box
      bg={bg}
      px="s"
      borderRadius={16}
      py="xs"
      alignItems="center"
      alignSelf="flex-start"
    >
      <Text color={color} variant="small">
        {text}
      </Text>
    </Box>
  );
};

export default Badge;
