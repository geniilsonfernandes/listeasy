import ListCard from "@/components/ListCard";
import ShortcutButtons from "@/components/ShortcutButtons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Navigation from "@/components/home/navigation";
import YStack from "@/components/ui/YStack";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ paddingTop: insets.top, flex: 1 }}>
      <Tabs.Screen options={{ headerShown: false }} />
      <ScrollView style={styles.containerWrapper}>
        <YStack px={16} pb={24}>
          <Navigation />
          <ShortcutButtons />
        </YStack>

        <ThemedView style={styles.list}>
          <View style={styles.indicator} />
          <View style={styles.header}>
            <ThemedText size={14} fontFamily="PoppinsMedium">
              Minhas listas
            </ThemedText>
            <ThemedText size={12} color="brand" fontFamily="PoppinsMedium">
              Arquivadas
            </ThemedText>
          </View>
          <View style={styles.listCards}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <ListCard key={i} />
            ))}
          </View>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    flex: 1,
  },
  list: {
    flex: 1,

    paddingTop: 16,
    borderRadius: 32,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  indicator: {
    alignSelf: "center",
    backgroundColor: Colors.light.bg,
    height: 4,
    borderRadius: 4,
    width: 45,
  },
  listCards: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
});
