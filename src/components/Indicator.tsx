import React from "react";
import { Box } from "./ui";

type IndicatorProps = React.ComponentProps<typeof Box>;

const Indicator = ({ ...rest }: IndicatorProps) => {
  return (
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      py="s"
      borderTopEndRadius={16}
      borderTopStartRadius={16}
      {...rest}
    >
      <Box width={100} height={4} bg="bg300"></Box>
    </Box>
  );
};

export default Indicator;
