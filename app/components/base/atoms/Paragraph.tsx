import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Fonts from "../../../constants/Fonts";
import Colors from "../../../constants/Colors";
import { BaseProps } from "../../../models/types";
import { IGlobalStyles, classNames } from "../../../styles";

export function Paragraph(props: ParagraphProps) {
  return <Text style={classNames(props.classNames || [], ParagraphClasses, ["p"])}>{props.children}</Text>;
}

const ParagraphClasses = StyleSheet.create<IParagraphClasses>({
  p: {
    fontSize: 16,
    fontFamily: Fonts.primaryFont,
    color: Colors.black,
  },
  btnPrimaryText: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: Fonts.primaryBoldFont,
    color: Colors.black,
  },
});

interface IParagraphClasses {
  p: TextStyle;
  btnPrimaryText: TextStyle;
}

export type ParagraphClassName = keyof IParagraphClasses | keyof IGlobalStyles;

export interface ParagraphProps extends BaseProps {
  classNames?: ParagraphClassName[];
}
