import HomeView from "@/components/views/HomeView";
import { Tabs } from "expo-router";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs.Screen options={{ headerShown: false }} />
      <HomeView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
