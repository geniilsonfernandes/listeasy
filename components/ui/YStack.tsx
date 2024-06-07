import { View } from "react-native";

type YStackProps = {
  children: React.ReactNode;

  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

const YStack = (props: YStackProps) => (
  <View
    style={{
      paddingHorizontal: props.px,
      paddingVertical: props.py,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingLeft: props.pl,
      paddingRight: props.pr,
      marginHorizontal: props.mx,
      marginVertical: props.my,
      marginTop: props.mt,
      marginBottom: props.mb,
      marginLeft: props.ml,
      justifyContent: props.justifyContent,
    }}
    children={props.children}
  />
);

export default YStack;
