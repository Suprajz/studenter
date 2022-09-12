import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

export const ColorStyles = StyleSheet.create<IColorStyles>({
  colorGray: {
    color: Colors.gray,
  },
  colorLightGray: {
    color: Colors.lightGray,
  },
  colorDarkGray: {
    color: Colors.darkGray,
  },
  colorPink: {
    color: Colors.pink,
  },
  colorLightPink: {
    color: Colors.lightPink,
  },
  colorGreen: {
    color: Colors.green,
  },
  colorYellow: {
    color: Colors.yellow,
  },
  colorWhite: {
    color: Colors.white,
  },
  colorBlack: {
    color: Colors.black,
  },
  colorBlue: {
    color: Colors.blue,
  },
  colorNavyBlue: {
    color: Colors.navyBlue,
  },
  colorSchema: {
    color: Colors.schemaColor,
  },
  colorSchemaDark: {
    color: Colors.schemaDarkColor,
  },
  colorRed: {
    color: Colors.red,
  },
  colorVividOrange: {
    color: Colors.vividOrange,
  },
  colorVividOrangeTint1: {
    color: Colors.vividOrangeTint1,
  },
  colorVividOrangeTint2: {
    color: Colors.vividOrangeTint1,
  },
  colorVividOrangeTint3: {
    color: Colors.vividOrangeTint1,
  },
  colorVividOrangeShade1: {
    color: Colors.vividOrangeShade1,
  },
  colorVividOrangeShade2: {
    color: Colors.vividOrangeShade2,
  },
  colorPurple: {
    color: Colors.purple,
  },
});

export interface IColorStyles {
  colorGray: any;
  colorLightGray: any;
  colorDarkGray: any;
  colorPink: any;
  colorRed: any;
  colorLightPink: any;
  colorGreen: any;
  colorYellow: any;
  colorWhite: any;
  colorBlack: any;
  colorBlue: any;
  colorNavyBlue: any;
  colorSchema: any;
  colorSchemaDark: any;
  colorVividOrange: any;
  colorVividOrangeTint1: any;
  colorVividOrangeTint2: any;
  colorVividOrangeTint3: any;
  colorVividOrangeShade1: any;
  colorVividOrangeShade2: any;
  colorPurple: any;
}
