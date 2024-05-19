import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Home,
  NotebookTabs,
  Plus,
  SquareUser,
  TramFront,
} from "lucide-react-native";
import { View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: true,
        tabBarStyle: {
          paddingVertical: 24,
          height: 100,
          borderTopWidth: 0,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="pantry"
        options={{
          title: "Dispensa",
          tabBarIcon: ({ color, focused }) => <TramFront color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: Colors.light.brand,
                paddingHorizontal: 16,
                paddingVertical: 12,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                height: 50,
                width: 50,
              }}
            >
              <Plus color="#fff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="lists"
        options={{
          title: "Listas",
          tabBarIcon: ({ color, focused }) => <NotebookTabs color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => <SquareUser color={color} />,
        }}
      />
    </Tabs>
  );
}
