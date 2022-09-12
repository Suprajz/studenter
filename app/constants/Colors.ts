const Colors: IColors = {
  black: "#000",
  white: "#fff",
  navyBlue: "#252830",
  blue: "#00aced",
  gray: "#51586a",
  darkGray: "#434857",
  lightGray: "#cfd2da",
  lightPink: "#d81f84",
  pink: "#d80879",
  green: "#12b627",
  lightGreen: "#17d530",
  yellow: "#f49940",
  lightYellow: "#ffee99",
  blackLight: "#18191D",
  schemaColor: "#DFE7F0",
  schemaDarkColor: "#BEC4CC",
  red: "#f44041",
  vividOrange: "#ffa630",
  vividOrangeTint1: "#FFFAF4",
  vividOrangeTint2: "#FFF2E1",
  vividOrangeTint3: "#FFE1B9",
  vividOrangeShade1: "#F48B00",
  vividOrangeShade2: "#442700",
  purple: "#c77dff",
};

export interface IColors {
  black: string;
  white: string;
  navyBlue: string;
  blue: string;
  gray: string;
  darkGray: string;
  lightGray: string;
  lightPink: string;
  pink: string;
  green: string;
  lightGreen: string;
  yellow: string;
  lightYellow: string;
  blackLight: string;
  schemaColor: string;
  schemaDarkColor: string;
  red: string;
  vividOrange: string;
  vividOrangeTint1: string;
  vividOrangeTint2: string;
  vividOrangeTint3: string;
  vividOrangeShade1: string;
  vividOrangeShade2: string;
  purple: string;
}

export type IColor = keyof IColors;

export default Colors;
