import * as React from "react";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { IGlobalStyles, classNames } from "../../../styles";
import { BaseProps } from "../../../models/types";

export function SafeAreaDiv(props: ScrollDivProps) {
  return (
    <SafeAreaView {...props} style={[props.style, classNames(props.classNames || [])]}>
      {props.children}
    </SafeAreaView>
  );
}

export type DivClassNames = keyof IGlobalStyles;

export interface ScrollDivProps extends BaseProps, SafeAreaViewProps {
  classNames?: DivClassNames[];
  width?: string | number;
  height?: string | number;
}
