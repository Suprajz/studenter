import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Fonts from "../../../constants/Fonts";
import Colors from "../../../constants/Colors";
import { BaseProps } from "../../../models/types";
import { classNames, IGlobalStyles } from "../../../styles";

export function Heading(props: HeadingProps) {
  return <Text style={classNames(props.classNames || [], HeadingClasses, ["h1"])}>{props.children}</Text>;
}

const HeadingClasses = StyleSheet.create<IHeadingClasses>({
  h1: {
    fontSize: 32,
    fontFamily: Fonts.primaryBoldFont,
    color: Colors.black,
    marginBottom: 8,
  },
  h2: {
    fontSize: 24,
    fontFamily: Fonts.primaryBoldFont,
    color: Colors.black,
    marginBottom: 4,
  },
});

interface IHeadingClasses {
  h1: TextStyle;
  h2: TextStyle;
}

type HeadingClassName = keyof IHeadingClasses | keyof IGlobalStyles;

interface HeadingProps extends BaseProps {
  classNames?: HeadingClassName[];
}
