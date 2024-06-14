import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Avatar, { Avatars } from "./Avatar";
import Icon from "./Icon";
import { Box, Text } from "./ui";
import Badge from "./ui/Badge";

type ListCardProps = {} & TouchableOpacityProps;

const ListCard = ({ ...rest }: ListCardProps) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.5}>
      <Box p="m" bg="bg200" borderRadius={16}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text fontFamily="PoppinsSemiBold" variant="subtitle" color="text100">
            Compras de março
          </Text>
          <Box flexDirection="row" gap="s">
            <Avatars>
              <Avatar />
              <Avatar />
              <Avatar />
            </Avatars>
            <Icon icon="ChevronRight" color="text100" />
          </Box>
        </Box>
        <Box py="s" flexDirection="row" gap="s">
          <Box flexDirection="row" gap="xs" alignItems="center">
            <Icon icon="DollarSign" color="text200" />
            <Text variant="body" color="text200">
              R$ 500.30
            </Text>
          </Box>
          <Box flexDirection="row" gap="xs" alignItems="center">
            <Icon icon="ShoppingBasket" color="text100" />
            <Text variant="body" color="text200">
              23
              <Text variant="body" color="text100">
                {" "}
                / 32
              </Text>
            </Text>
          </Box>
        </Box>
        <Box>
          <Badge variant="warning" text="Em progresso" />
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ListCard;
