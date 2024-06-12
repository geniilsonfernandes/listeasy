import ListCard from "@/components/ListCard";
import ShortcutButtons from "@/components/ShortcutButtons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import YStack from "@/components/ui/YStack";
import Navigation from "./components/Navigation";

import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const renderItem = () => {
  return (
    <View style={styles.itemContainer}>
      <ListCard />
    </View>
  );
};

const HomeView = () => {
  return (
    <ThemedView style={styles.container}>
      <FlatList
        style={[styles.flatList]}
        data={Array.from({
          length: 50,
        }).map((_, i) => i)}
        keyExtractor={(i) => i.toString()}
        renderItem={renderItem}
        ListHeaderComponent={() => (
          <>
            <YStack>
              <Navigation />
              <ShortcutButtons />
            </YStack>
            <View>
              <View style={styles.listHeaderContainer}>
                <ThemedText size={14} fontFamily="PoppinsMedium">
                  Minhas listas
                </ThemedText>
                <ThemedText size={12} color="brand" fontFamily="PoppinsMedium">
                  Arquivadas
                </ThemedText>
              </View>
            </View>
          </>
        )}
        ListHeaderComponentStyle={styles.listHeader}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    zIndex: 10,
  },

  itemContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  listHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  listHeader: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default HomeView;
