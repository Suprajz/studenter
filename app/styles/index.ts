import { StyleSheet } from "react-native";
import { SpacingStyles, ISpacingStyles } from "./Spacing";
import { SizingStyles, ISizingStyles } from "./Sizing";
import { AlertStyles, IAlertStyles } from "./Alerts";
import { PositionStyles, IPositionStyles } from "./Position";
import { BackgroundColorStyles, IBackgroundColorStyles } from "./BackgroundColor";
import { TypographyStyles, ITypographyStyles } from "./Typography";
import { ColorStyles, IColorStyles } from "./Colors";
import { BordersStyles, IBordersStyles } from "./Borders";
import { DisplayStyles, IDisplayStyles } from "./Display";
import { CustomDivStyles, ICustomDivStyles } from "./CustomDiv";

export function classNames(classes: any[], classGroup?: any, defaultClasses?: string[]) {
  classGroup = !!classGroup ? { ...classGroup, ...globalStyles } : { ...globalStyles };
  let style: any = {};
  if (!classes || !classes.length) {
    if (!!defaultClasses && !!defaultClasses.length) {
      defaultClasses.forEach((x) => {
        if (!!x && !!classGroup[x]) {
          style = { ...style, ...classGroup[x] };
        }
      });
    }
    return style;
  }

  classes.forEach((c) => {
    if (!!c && !!classGroup[c]) {
      style = { ...style, ...classGroup[c] };
    }
  });
  return style;
}

export const globalStyles = StyleSheet.create<IGlobalStyles>({
  ...SpacingStyles,
  ...SizingStyles,
  ...AlertStyles,
  ...PositionStyles,
  ...BackgroundColorStyles,
  ...TypographyStyles,
  ...ColorStyles,
  ...BordersStyles,
  ...DisplayStyles,
  ...CustomDivStyles,
});

export interface IGlobalStyles
  extends ISizingStyles,
    IAlertStyles,
    IPositionStyles,
    IBackgroundColorStyles,
    ITypographyStyles,
    IColorStyles,
    ISpacingStyles,
    IBordersStyles,
    IDisplayStyles,
    ICustomDivStyles {}
