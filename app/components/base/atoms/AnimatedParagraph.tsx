import * as React from "react";
import { Animated, StyleSheet, TextProps, TextStyle } from "react-native";
import { classNames } from "../../../styles";
import { ParagraphClassName } from "./Paragraph";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { BaseProps } from "../../../models/types";

export function AnimatedParagraph(props: AnimatedParagraphProps) {
  return (
    <Animated.Text style={[{ [props.animation.type]: props.animation.value } || null, classNames(props.classNames || [], AnimatedParagraphClasses)]}>
      {props.children}
    </Animated.Text>
  );
}

const AnimatedParagraphClasses = StyleSheet.create<IAnimatedParagraphClasses>({});

interface IAnimatedParagraphClasses {}

type AnimationType = keyof TextStyle;

export interface AnimatedParagraphProps extends BaseProps {
  animation: {
    type: AnimationType;
    value: any;
  };
  classNames?: ParagraphClassName[];
  translate?: boolean;
}
