import * as React from "react";
import { ActivityIndicator, ColorValue } from "react-native";
import { BaseProps } from "../../../models/types";

export default function Loader(props: LoaderProps) {
  return <ActivityIndicator {...props}>{props.children}</ActivityIndicator>;
}

export interface LoaderProps extends BaseProps {
  animating?: boolean | undefined;
  color?: ColorValue | undefined;
  size?: number | "small" | "large" | undefined;
}
