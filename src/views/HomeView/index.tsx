import Icon from "@/components/Icon";
import Indicator from "@/components/Indicator";
import ListCard from "@/components/ListCard";
import Shortcut from "@/components/Shortcut";
import { Box, Text } from "@/components/ui";
import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { FlatList } from "react-native";
import Navigation from "./components/Navigation";

const HomeView = () => {
  const theme = useTheme<Theme>();

  const renderHeader = () => (
    <>
      <Box px="m" pb="l" flex={1} bg="bg200">
        <Navigation />
        <Box>
          <Text color="text200" variant="body" fontFamily="PoppinsMedium">
            Algumas coisas que você pode fazer
          </Text>
          <Box flexDirection="row" gap="m" py="m">
            <Shortcut
              title="Dispensa"
              description="Gerencie seu armário com suas compras"
              icon={<Icon icon="PackageSearch" size={24} />}
            />
            <Shortcut
              title="Insights"
              description="insights valiosos sobre o seu consumo"
              icon={<Icon icon="Lightbulb" size={24} />}
            />
          </Box>
        </Box>
      </Box>
      <Indicator bg="bg100" mt="-m" />
      <Box flex={1} bg="bg100" flexGrow={1} justifyContent="space-between">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          px="m"
          py="m"
        >
          <Text color="text200" variant="body" fontFamily="PoppinsMedium">
            Minhas listas
          </Text>
          <Text color="greenDark" variant="body">
            Minhas listas
          </Text>
        </Box>
      </Box>
    </>
  );

  const renderItem = () => {
    return (
      <Box px="m">
        <ListCard />
      </Box>
    );
  };

  return (
    <FlatList
      alwaysBounceVertical={false}
      style={{
        flex: 1,
        backgroundColor: theme.colors.bg100,
        paddingBottom: 100,
      }}
      data={Array.from(Array(10).keys())}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      ItemSeparatorComponent={() => <Box height={16} />}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={() => <Box height={100} />}
    />
  );
};

export default HomeView;
