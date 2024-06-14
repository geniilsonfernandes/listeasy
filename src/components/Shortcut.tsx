import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
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
      <View style={styles.container}>
        <Box style={styles.iconWrapper}>{icon}</Box>
        <Box gap="s">
          <Text fontFamily="PoppinsSemiBold" variant="subtitle" color="text100">
            {title}
          </Text>
          <Text variant="small" color="text400">
            {description}
          </Text>
        </Box>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "white",
  },
  iconWrapper: {
    paddingBottom: 16,
  },
});

export default ShortcutButton;
