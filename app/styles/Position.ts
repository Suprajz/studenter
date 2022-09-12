import { StyleSheet } from "react-native";

export const PositionStyles = StyleSheet.create<IPositionStyles>({
  relative: { position: "relative" },
  absolute: { position: "absolute" },
  top0: { top: 0 },
  top50: { top: "50%" },
  left0: { left: 0 },
  left50: { left: "50%" },
  bottom0: { bottom: 0 },
  bottom25: { bottom: "25%" },
  bottom50: { bottom: "50%" },
  right0: { right: 0 },
  right25: { right: "25%" },
});

export interface IPositionStyles {
  relative: any;
  absolute: any;
  top0: any;
  top50: any;
  left0: any;
  left50: any;
  bottom0: any;
  bottom25: any;
  bottom50: any;
  right0: any;
  right25: any;
}
