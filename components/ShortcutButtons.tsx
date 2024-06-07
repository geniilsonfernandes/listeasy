import { Colors } from "@/constants/Colors";
import { Lightbulb, TramFront } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import ShortcutButton from "./Shortcut";
import { ThemedText } from "./ThemedText";

const ShortcutButtons = () => {
  return (
    <View>
      <ThemedText>Algumas coisas que você pode fazer</ThemedText>
      <View style={styles.hstack}>
        <ShortcutButton
          title="Dispensa"
          style={{ flex: 1 }}
          description="Gerencie seu armário com suas compras"
          icon={<TramFront color={Colors.light.brand} />}
        />
        <ShortcutButton
          style={{ flex: 1 }}
          title="Insights"
          description="insights valiosos sobre o seu consumo"
          icon={<Lightbulb color={Colors.light.brand} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hstack: {
    flexDirection: "row",
    gap: 16,
    marginTop: 16,
  },
});

export default ShortcutButtons;
