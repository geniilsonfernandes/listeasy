import Icon from "@/components/Icon";
import { Box } from "@/components/ui";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Theme } from "@/theme";
import HomeBottomSheetModal from "@/views/HomeView/components/HomeBottomSheetModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useTheme } from "@shopify/restyle";
import { Tabs } from "expo-router";
import { Home, NotebookTabs, SquareUser, TramFront } from "lucide-react-native";
import { useRef } from "react";

export default function TabLayout() {
  const bottomSheet = useRef<BottomSheetModal>(null);
  const hanldePresent = () => bottomSheet.current?.present();
  const colorScheme = useColorScheme();
  const { colors } = useTheme<Theme>();

  return (
    <>
      <HomeBottomSheetModal ref={bottomSheet} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.greenPrimary,
          tabBarInactiveTintColor: colors.text100,

          headerShown: true,
          tabBarStyle: {
            borderColor: "transparent",
            borderWidth: 0,
            paddingBottom: 40,
            paddingTop: 0,
            height: 100,
            backgroundColor: colors.bg300,
            borderTopColor: colors.greenPrimary,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Home strokeWidth={1} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="pantry"
          options={{
            title: "Dispensa",
            tabBarIcon: ({ color, focused }) => (
              <TramFront strokeWidth={1} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              hanldePresent();
            },
          }}
          options={{
            title: "",
            tabBarShowLabel: false,

            tabBarIcon: ({ color, focused }) => (
              <Box
                bg="greenPrimary"
                height={60}
                width={60}
                justifyContent="center"
                alignItems="center"
                borderRadius={16}
                marginBottom="l"
              >
                <Icon icon="PanelBottomOpen" size={32} />
              </Box>
            ),
          }}
        />
        <Tabs.Screen
          name="lists"
          options={{
            title: "Listas",
            tabBarIcon: ({ color, focused }) => (
              <NotebookTabs strokeWidth={1} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, focused }) => (
              <SquareUser strokeWidth={1} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
