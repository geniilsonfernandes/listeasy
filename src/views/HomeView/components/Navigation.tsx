import Icon from "@/components/Icon";
import TabBarButton from "@/components/TabBarButton";
import { Box } from "@/components/ui";
import React from "react";

const Navigation = () => {
  return (
    <Box flexDirection="row" justifyContent="space-between" paddingVertical="m">
      <TabBarButton>
        <Icon icon="AlignLeft" size={24} color="greenPrimary" />
      </TabBarButton>
      <TabBarButton>
        <Icon icon="Bell" size={24} color="greenPrimary" />
      </TabBarButton>
    </Box>
  );
};

export default Navigation;
