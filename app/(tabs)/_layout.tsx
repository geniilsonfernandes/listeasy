import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs } from "expo-router";
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
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].brand,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: true,
        tabBarStyle: {
          borderColor: "transparent",
          borderWidth: 0,
          paddingBottom: 24,
          paddingTop: 16,
          height: 80,
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
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
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
                marginBottom: 24,
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
