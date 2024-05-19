import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Stack, router } from "expo-router";
import { MoveLeft } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Notifications = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Notifications",
          headerTransparent: true,
          headerTitle(props) {
            return <ThemedText>{props.children}</ThemedText>;
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  padding: 6,
                  borderRadius: 10,
                }}
              >
                <MoveLeft color={Colors.light.text} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />

      <ThemedText style={styles.containerWrapper}> Notifications</ThemedText>
    </>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    paddingTop: 96,
  },
});

export default Notifications;
