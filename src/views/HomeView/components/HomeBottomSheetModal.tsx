import Icon from "@/components/Icon";
import { Box, Text } from "@/components/ui";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import * as Icons from "lucide-react-native";
import React, { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type Ref = BottomSheetModal;

type ButtonProps = {
  title: string;
  icon?: keyof typeof Icons;
};

const SheetButton = ({ title, icon = "SquarePen" }: ButtonProps) => {
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

const HomeBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const bg = useThemeColor({}, "bg");
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
      backgroundStyle={{ backgroundColor: bg }}
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

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    flex: 1,
    backgroundColor: "transparent",
  },
  buttonsContainer: {
    gap: 8,
  },
  button: {
    height: 44,
    paddingHorizontal: 16,
    width: "100%",
    gap: 12,
    borderColor: "#BCBCBC",
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default HomeBottomSheetModal;
