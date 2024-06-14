import SheetButton from "@/components/SheetButton";
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

const HomeBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const { colors } = useTheme<Theme>();
  const snapPoints = useMemo(() => [280], []);

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
      backgroundStyle={{ backgroundColor: colors.bg300 }}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{
        backgroundColor: "#E0E0E0",
        width: 100,
      }}
    >
      <Box px="m" gap="m" pt="m">
        <Text color="text200" variant="body" fontFamily="PoppinsMedium">
          O que deseja fazer?
        </Text>
        <Box gap="s">
          <SheetButton title="Criar nova lista" icon="ScrollText" />
          <SheetButton title="Cria novo item na dispensa" icon="PackagePlus" />
          <SheetButton title="Ler codigo" icon="Scan" />
        </Box>
      </Box>
    </BottomSheetModal>
  );
});

export default HomeBottomSheetModal;
