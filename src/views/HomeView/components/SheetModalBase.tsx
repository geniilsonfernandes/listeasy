import { Box, Text } from "@/components/ui";
import { Theme } from "@/theme";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useTheme } from "@shopify/restyle";

import React, { forwardRef, useCallback, useMemo } from "react";

type Ref = BottomSheetModal;

type SheetModalBaseProps = {
  children: React.ReactNode;
  title: string;
  snaps?: number[];
};

const SheetModalBase = forwardRef<Ref, SheetModalBaseProps>((props, ref) => {
  const { colors } = useTheme<Theme>();
  const snapPoints = useMemo(() => props.snaps || [280], [props.snaps]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{ backgroundColor: colors.bg100 }}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{
        backgroundColor: colors.bg300,
        width: 100,
      }}
    >
      <Box px="m" gap="m" pt="m" bg="bg100">
        <Text color="text200" variant="title" fontFamily="PoppinsMedium">
          {props.title}
        </Text>
        <Box py="s">{props.children}</Box>
      </Box>
    </BottomSheetModal>
  );
});

export default SheetModalBase;
