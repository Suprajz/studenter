import * as React from "react";
import { KeyboardAvoidingView, KeyboardAvoidingViewProps } from "react-native";
import { classNames } from "../../../styles";
import { BaseProps } from "../../../models/types";
import { DivClassNames } from "./ScrollDiv";

export function KeyboardAvoidingDiv(props: KeyboardAvoidingDivProps) {
  return (
    <KeyboardAvoidingView {...props} style={[props.style, classNames(props.classNames || [])]}>
      {props.children}
    </KeyboardAvoidingView>
  );
}

export interface KeyboardAvoidingDivProps extends BaseProps, KeyboardAvoidingViewProps {
  classNames?: DivClassNames[];
  width?: string | number;
  height?: string | number;
}
