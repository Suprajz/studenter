import { StyleSheet } from "react-native";

export const DisplayStyles = StyleSheet.create<IDisplayStyles>({
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  justifyContentFlexStart: {
    justifyContent: "flex-start",
  },
  justifyContentFlexEnd: {
    justifyContent: "flex-end",
  },
  alignItemsCenter: {
    alignItems: "center",
  },
  alignItemsStart: {
    alignItems: "flex-start",
  },
  alignItemsEnd: {
    alignItems: "flex-end",
  },
  flexContentCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  dNone: {
    display: "none",
  },
  z1: {
    zIndex: 1,
  },
  z9: {
    zIndex: 9,
  },
  z99: {
    zIndex: 99,
  },
  opacity99: {
    opacity: 0.99,
  },
  elevation4: {
    elevation: 4,
  },
});

export interface IDisplayStyles {
  flex1: any;
  flexGrow1: any;
  flexWrap: any;
  flexRow: any;
  flexColumn: any;
  justifyContentCenter: any;
  justifyContentSpaceBetween: any;
  justifyContentFlexStart: any;
  justifyContentFlexEnd: any;
  alignItemsCenter: any;
  alignItemsStart: any;
  alignItemsEnd: any;
  flexContentCenter: any;
  alignSelfCenter: any;
  alignSelfStart: any;
  alignSelfEnd: any;
  dNone: any;
  z1: any;
  z9: any;
  z99: any;
  opacity99: any;
  elevation4: any;
}
