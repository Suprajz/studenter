import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

export const BordersStyles = StyleSheet.create<IBordersStyles>({
  borderTransparent: {
    borderColor: "transparent",
  },
  borderPink: {
    borderColor: Colors.pink,
  },
  borderLightPink: {
    borderColor: Colors.lightPink,
  },
  borderDarkGray: {
    borderColor: Colors.darkGray,
  },
  borderWhite: {
    borderColor: Colors.white,
  },
  border1: {
    borderWidth: 1,
  },
  borderBottom1: {
    borderBottomWidth: 1,
  },
  borderBottom0: {
    borderBottomWidth: 0,
  },
  borderStart1: {
    borderStartWidth: 1,
  },
  borderEnd1: {
    borderEndWidth: 1,
  },
  borderTop1: {
    borderTopWidth: 1,
  },
  borderRadius6: {
    borderRadius: 6,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadiusTop8: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  borderRadius32: {
    borderRadius: 32,
  },
  borderRadiusTop16: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  borderRadiusTop24: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  borderRadiusBottom8: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  borderPrimaryDark: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: Colors.vividOrangeShade2,
  },
});

export interface IBordersStyles {
  borderTransparent: any;
  borderPink: any;
  borderLightPink: any;
  borderDarkGray: any;
  borderWhite: any;
  border1: any;
  borderTop1: any;
  borderBottom1: any;
  borderBottom0: any;
  borderStart1: any;
  borderEnd1: any;
  borderRadius6: any;
  borderRadius8: any;
  borderRadius16: any;
  borderRadiusTop8: any;
  borderRadius32: any;
  borderRadiusTop16: any;
  borderRadiusTop24: any;
  borderRadiusBottom8: any;
  borderPrimaryDark: any;
}
