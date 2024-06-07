import { AlignLeft, Bell } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import TabBarButton from "../TabBarButton";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <TabBarButton>
        <AlignLeft color={"#999999"} />
      </TabBarButton>
      <TabBarButton>
        <Bell color={"#999999"} />
      </TabBarButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
  },
});

export default Navigation;
