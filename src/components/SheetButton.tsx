import * as Icons from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import Icon from "./Icon";
import { Box, Text } from "./ui";

type SheetButtonProps = {
  title: string;
  icon?: keyof typeof Icons;
  variant?: "default" | "danger" | "success";
} & React.ComponentProps<typeof TouchableOpacity>;

const SheetButton = ({
  title,
  icon = "SquarePen",
  variant = "default",
  ...props
}: SheetButtonProps) => {
  const borderColor =
    variant === "danger"
      ? "dangerText"
      : variant === "success"
      ? "successText"
      : "bg400";
  const text =
    variant === "danger"
      ? "dangerText"
      : variant === "success"
      ? "successText"
      : "text200";

  return (
    <TouchableOpacity activeOpacity={0.5} {...props}>
      <Box
        flexDirection="row"
        gap="s"
        alignItems="center"
        px="m"
        bg="bg100"
        borderRadius={44}
        height={44}
        borderColor={borderColor}
        borderWidth={1}
      >
        <Icon icon={icon} color={text} />
        <Text color={text}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default SheetButton;
