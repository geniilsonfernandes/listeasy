import SheetButton from "@/components/SheetButton";
import { Box } from "@/components/ui";
import Divisor from "@/components/ui/Divisor";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useRef } from "react";
import SheetModalBase from "./SheetModalBase";

type Ref = BottomSheetModal;

type OptionsSheetModalProps = {
  onDeleteList: () => void;
};

const OptionsSheetModal = forwardRef<Ref, OptionsSheetModalProps>(
  (props, ref) => {
    const deleteSheetModalRef = useRef<BottomSheetModal>(null);

    return (
      <>
        <SheetModalBase
          ref={ref}
          {...props}
          title="nome da lista"
          snaps={[430]}
        >
          <Box gap="s">
            <SheetButton title="Abrir lista" icon="Folder" />
            <SheetButton title="Gerar códigp" icon="QrCode" />
            <SheetButton title="arquivar" icon="Archive" />
            <Divisor my="s" bg="bg500" height={1} />
            <SheetButton title="Modo compras" icon="ShoppingCart" />
            <Divisor my="s" bg="bg500" height={1} />
            <SheetButton
              variant="danger"
              title="Apagar lista"
              icon="Trash"
              onPress={() => {
                deleteSheetModalRef.current?.present();
              }}
            />
          </Box>
        </SheetModalBase>

        <SheetModalBase
          ref={deleteSheetModalRef}
          {...props}
          title="Tem certeza?"
          snaps={[225]}
        >
          <Box gap="s">
            <SheetButton
              title="Cancelar"
              icon="X"
              onPress={() => deleteSheetModalRef.current?.dismiss()}
            />
            <SheetButton
              variant="danger"
              title="Apagar"
              icon="Trash"
              onPress={() => {
                deleteSheetModalRef.current?.dismiss();
                props.onDeleteList();
              }}
            />
          </Box>
        </SheetModalBase>
      </>
    );
  }
);

export default OptionsSheetModal;
