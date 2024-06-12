import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo } from "react";
import { Text, View } from "react-native";

type Ref = BottomSheetModal;

const HomeBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints}>
      <View>
        <Text>...</Text>
      </View>
    </BottomSheetModal>
  );
});

export default HomeBottomSheetModal;
