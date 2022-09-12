import * as React from "react";
import BaseImage from "../atoms/BaseImage";

export default function Logo(props: LogoProps) {
  return <BaseImage source={require("../../../../assets/images/logo.png")} width={props.width} height={props.height} />;
}

interface LogoProps {
  width?: number | undefined;
  height?: number | undefined;
}
