import * as React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { classNames } from "../../../styles";
import { DivClassNames } from "./Div";

export default function BaseImage(props: BaseImageProps) {
  return (
    <Image
      width={props.width}
      height={props.height}
      style={[classNames(props.classNames || []), { height: props.height, width: props.width }]}
      source={props.source}
    />
  );
}

interface BaseImageProps {
  source: ImageSourcePropType;
  classNames?: DivClassNames[];
  width?: number | undefined;
  height?: number | undefined;
}
