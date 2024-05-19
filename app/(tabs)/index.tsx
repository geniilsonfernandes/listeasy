import ShortcutButtons from "@/components/ShortcutButtons";
import TabBarButton from "@/components/TabBarButton";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Tabs } from "expo-router";
import { AlignLeft, Bell } from "lucide-react-native";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, flex: 1 }}>
      <Tabs.Screen options={{ headerShown: false }} />
      <ThemedView
        style={styles.containerWrapper}
        lightColor={Colors.light.bg}
        darkColor={Colors.dark.bg}
      >
        <View style={styles.header}>
          <TabBarButton>
            <AlignLeft color={"#999999"} />
          </TabBarButton>
          <TabBarButton>
            <Bell color={"#999999"} />
          </TabBarButton>
        </View>
        <ShortcutButtons />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerWrapper: {
    paddingHorizontal: 24,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
  headerButton: {
    padding: 4,
    color: "#999999",
  },
});
