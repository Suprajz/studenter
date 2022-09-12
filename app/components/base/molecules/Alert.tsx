import * as React from "react";
import { Div, DivClassNames } from "../atoms/Div";
import { Paragraph } from "../atoms/Paragraph";
import Button from "../atoms/Button";

export default function Alert(props: AlertProps) {
  return (
    <Div classNames={["alert", props.className]}>
      <Button classNames={["w100", "h100"]} onPress={props.onPress}>
        {!!props.title ? <Paragraph classNames={["primaryFontBold", "mv5", "font20", getAlertTextColor(props.className)]}>{props.title}</Paragraph> : null}
        <Paragraph classNames={["primaryFontBold", "mv5", "font16", getAlertTextColor(props.className)]}>{props.text}</Paragraph>
      </Button>
    </Div>
  );
}

function getAlertTextColor(className: DivClassNames): DivClassNames {
  switch (className) {
    case "alertSuccess":
      return "colorBlack";
    case "alertWarning":
      return "colorBlack";
    case "alertDanger":
      return "colorWhite";
    case "alertInfo":
      return "colorNavyBlue";
    default:
      return "colorGreen";
  }
}

export interface AlertProps {
  text: string;
  className: DivClassNames;
  title?: string | null;
  onPress?: () => void;
}
