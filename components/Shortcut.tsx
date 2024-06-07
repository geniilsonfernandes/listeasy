import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

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
    <TouchableOpacity {...rest}>
      <ThemedView
        style={styles.container}
        lightColor={Colors.light.card}
        darkColor={Colors.dark.card}
      >
        <View style={styles.iconWrapper}>{icon}</View>
        <View>
          <ThemedText fontFamily="PoppinsSemiBold" size={14} color="text900">
            {title}
          </ThemedText>
          <ThemedText fontFamily="PoppinsRegular" size={12}>
            {description}
          </ThemedText>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
  },
  iconWrapper: {
    paddingBottom: 16,
  },
});

export default ShortcutButton;
