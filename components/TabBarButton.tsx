import React from "react";
import {
  StyleSheet,
  TouchableHighlightProps,
  TouchableOpacity,
} from "react-native";

type TabBarButtonProps = TouchableHighlightProps;

const TabBarButton = (props: TabBarButtonProps) => {
  return <TouchableOpacity style={styles.container} {...props} />;
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
});

export default TabBarButton;
