import * as React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { IGlobalStyles, classNames } from "../../../styles";
import { BaseProps } from "../../../models/types";

export function Div(props: DivProps) {
  return (
    <View {...props} style={[classNames(props.classNames || [])]}>
      {props.children}
    </View>
  );
}

export type DivClassNames = keyof IGlobalStyles;
export type DivStyle = ViewStyle;

export interface DivProps extends BaseProps, ViewProps {
  classNames?: DivClassNames[];
  width?: string | number;
  height?: string | number;
}
