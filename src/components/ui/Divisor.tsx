import React, { ComponentProps } from "react";
import { Box } from ".";

type DivisorProps = ComponentProps<typeof Box>;

const Divisor = ({ ...props }: DivisorProps) => {
  return <Box bg="bg200" height={1} mx="l" {...props}></Box>;
};

export default Divisor;
