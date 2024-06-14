import SheetButton from "@/components/SheetButton";
import { Box } from "@/components/ui";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import SheetModalBase from "./SheetModalBase";

type Ref = BottomSheetModal;

const CreateSheetModal = forwardRef<Ref>((props, ref) => {
  return (
    <SheetModalBase ref={ref} {...props} title="O que deseja fazer?">
      <Box gap="s">
        <SheetButton title="Criar nova lista" icon="ScrollText" />
        <SheetButton title="Cria novo item na dispensa" icon="PackagePlus" />
        <SheetButton title="Ler codigo" icon="Scan" />
      </Box>
    </SheetModalBase>
  );
});

export default CreateSheetModal;
