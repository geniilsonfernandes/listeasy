import * as Icons from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { Box, Text } from "./ui";

type SheetButtonProps = {
  title: string;
  icon?: keyof typeof Icons;
};

const SheetButton = ({ title, icon = "SquarePen" }: SheetButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <Box
        flexDirection="row"
        gap="s"
        alignItems="center"
        px="m"
        bg="bg100"
        borderRadius={44}
        height={44}
        borderColor="bg200"
        borderWidth={1}
      >
        <Icon icon={icon} />
        <Text color="text200">{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default SheetButton;
