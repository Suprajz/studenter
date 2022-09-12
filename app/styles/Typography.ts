import { StyleSheet } from "react-native";
import Fonts from "../constants/Fonts";

export const TypographyStyles = StyleSheet.create<ITypographyStyles>({
  underline: {
    textDecorationLine: "underline",
  },
  primaryFont: {
    fontFamily: Fonts.primaryFont,
  },
  primaryFontBold: {
    fontFamily: Fonts.primaryBoldFont,
  },
  font20: {
    fontSize: 20,
  },
  font16: {
    fontSize: 16,
  },
  font24: {
    fontSize: 24,
  },
  font32: {
    fontSize: 32,
  },
  font48: {
    fontSize: 48,
  },
  fontNormal: {
    fontStyle: "normal",
  },
  fontItalic: {
    fontStyle: "italic",
  },
  fontBold: {
    fontWeight: "bold",
  },
  lineHeight16: {
    lineHeight: 16,
  },
  lineHeight20: {
    lineHeight: 20,
  },
  lineHeight24: {
    lineHeight: 24,
  },
  textCenter: {
    textAlign: "center",
  },
  textVertCenter: {
    textAlignVertical: "center",
  },
});

export interface ITypographyStyles {
  underline: any;
  primaryFont: any;
  primaryFontBold: any;
  font20: any;
  font24: any;
  font32: any;
  font48: any;
  font16: any;
  fontNormal: any;
  fontItalic: any;
  fontBold: any;
  lineHeight16: any;
  lineHeight20: any;
  lineHeight24: any;
  textCenter: any;
  textVertCenter: any;
}
