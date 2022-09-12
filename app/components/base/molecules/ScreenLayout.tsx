import { StatusBar, StatusBarStyle } from "expo-status-bar";
import * as React from "react";
import { IGlobalStyles } from "../../../styles";
import { BaseProps } from "../../../models/types";
import { Div } from "../atoms/Div";
import { SafeAreaDiv } from "../atoms/SafeAreaDiv";

export function ScreenLayout(props: ScreenLayoutProps) {
  const theme: ScreenLayoutTheme = props.theme || "dark";
  const statusBarStyle: StatusBarStyle = props.statusBarStyle || "light";

  let themeClass: keyof IGlobalStyles = "navyBlueBackground";

  switch (theme) {
    case "dark":
      themeClass = "navyBlueBackground";
      break;
    case "light":
      themeClass = "vividOrangeTint1Background";
      break;
  }

  return props.isModalScreen ? (
    <Div classNames={[themeClass, "screenLayoutHeight", "pt__StBar"]}>
      <StatusBar style={statusBarStyle} />
      {props.children}
    </Div>
  ) : (
    <SafeAreaDiv classNames={[themeClass]}>
      <StatusBar style={statusBarStyle} />
      <Div classNames={["h100"]}>{props.children}</Div>
    </SafeAreaDiv>
  );
}

type ScreenLayoutTheme = "dark" | "light";

interface ScreenLayoutProps extends BaseProps {
  theme?: ScreenLayoutTheme;
  statusBarStyle?: StatusBarStyle | undefined;
  isModalScreen?: boolean;
}
