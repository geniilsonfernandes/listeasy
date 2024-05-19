import { Colors } from "@/constants/Colors";
import { Lightbulb, TramFront } from "lucide-react-native";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import ShortcutButton from "./Shortcut";
import { ThemedText } from "./ThemedText";

const ShortcutButtons = () => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });
  };

  return (
    <View style={styles.container}>
      <ThemedText>Algumas coisas que você pode fazer</ThemedText>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 16,
        }}
      >
        <ShortcutButton
          title="Dispensa"
          description="Gerencie seu armário com suas compras"
          icon={<TramFront color={Colors.light.brand} />}
        />
        <ShortcutButton
          title="Insights"
          description="insights valiosos sobre o seu consumo"
          icon={<Lightbulb color={Colors.light.brand} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});

export default ShortcutButtons;
