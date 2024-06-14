import React from "react";

import { Theme } from "@/theme";
import { useTheme } from "@shopify/restyle";
import * as Icons from "lucide-react-native";

type IconProps = {
  icon?: keyof typeof Icons;
  color?: keyof Theme["colors"];
  size?: number;
};

const Icon = ({
  icon = "SquarePen",
  color = "text200",
  size = 18,
}: IconProps) => {
  const { colors } = useTheme<Theme>();
  const IconComponent = Icons[icon] as React.ComponentType<any>;
  return <IconComponent color={colors[color]} strokeWidth={1} size={size} />;
};

export default Icon;
