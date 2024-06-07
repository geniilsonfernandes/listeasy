import { useThemeColor } from "@/hooks/useThemeColor";
import { ChevronRight, DollarSign, ShoppingBasket } from "lucide-react-native";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import Badge from "./ui/Badge";

type ListCardProps = {} & TouchableOpacityProps;

const ListCard = ({ ...rest }: ListCardProps) => {
  const iconColor = useThemeColor({}, "text");
  return (
    <TouchableOpacity {...rest}>
      <ThemedView
        style={styles.container}
        lightColor="#fff"
        darkColor="#2E2E2E"
      >
        <View style={styles.header}>
          <ThemedText fontFamily="PoppinsSemiBold" size={14} color="text900">
            Compras de março
          </ThemedText>
          <View style={styles.headerLeftContent}>
            <View style={styles.avatars}>
              <View style={styles.avatar} />
              <View style={styles.avatar} />
            </View>
            <ChevronRight color={iconColor} size={18} />
          </View>
        </View>
        <View style={styles.infomations}>
          <View style={styles.infomation}>
            <DollarSign color={iconColor} size={14} />
            <ThemedText size={14}>R$ 500.30</ThemedText>
          </View>
          <View style={styles.infomation}>
            <ShoppingBasket color={iconColor} size={14} />
            <ThemedText size={14}>
              23
              <ThemedText size={14} color="text900">
                {" "}
                / 32
              </ThemedText>
            </ThemedText>
          </View>
        </View>
        <View style={styles.badges}>
          <Badge size="sm">Em progresso</Badge>
        </View>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeftContent: {
    flexDirection: "row",
    gap: 8,
  },
  avatars: {
    flexDirection: "row",
  },
  avatar: {
    width: 16,
    height: 16,
    marginRight: -8,
    borderRadius: 8,
    backgroundColor: "gray",
    opacity: 0.5,
  },
  infomations: {
    paddingTop: 2,
    flexDirection: "row",
    gap: 8,
  },
  infomation: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  badges: {
    paddingTop: 8,
    flexDirection: "row",
  },
});

export default ListCard;
