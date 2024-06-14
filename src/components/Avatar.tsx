import React from "react";
import { Box } from "./ui";

const Avatar = () => {
  return <Box height={16} width={16} bg="bg100" borderRadius={16} />;
};

type AvatarProps = {
  children?: React.ReactNode;
};

export const Avatars = ({ children }: AvatarProps) => {
  return (
    <Box flexDirection="row">
      {React.Children.map(children, (child, index) => (
        <Box key={index} ml="-s" borderWidth={1} borderColor="bg200">
          {child}
        </Box>
      ))}
    </Box>
  );
};

export default Avatar;
