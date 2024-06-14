import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Box, Text } from "./ui";

type ShortcutButtonProps = {
  title: string;
  description: string;
  icon: React.ReactElement;
} & TouchableOpacityProps;

const ShortcutButton = ({
  title,
  description,
  icon,
  ...rest
}: ShortcutButtonProps) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.5} style={{ flex: 1 }}>
      <Box p="m" bg="bg100" borderRadius={16}>
        <Box pb="m">{icon}</Box>
        <Box gap="s">
          <Text fontFamily="PoppinsSemiBold" variant="subtitle" color="text100">
            {title}
          </Text>
          <Text variant="small" color="text400">
            {description}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};


export default ShortcutButton;
