import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

export const BackgroundColorStyles = StyleSheet.create<IBackgroundColorStyles>({
  transparentBackground: {
    backgroundColor: "transparent",
  },
  pinkBackground: {
    backgroundColor: Colors.pink,
  },
  lightPinkBackground: {
    backgroundColor: Colors.lightPink,
  },
  whiteBackground: {
    backgroundColor: Colors.white,
  },
  grayBackground: {
    backgroundColor: Colors.gray,
  },
  lightGrayBackground: {
    backgroundColor: Colors.lightGray,
  },
  darkGrayBackground: {
    backgroundColor: Colors.darkGray,
  },
  lightBlackBackground: {
    backgroundColor: Colors.blackLight,
  },
  navyBlueBackground: {
    backgroundColor: Colors.navyBlue,
  },
  blueBackground: {
    backgroundColor: Colors.blue,
  },
  blackBackground: {
    backgroundColor: Colors.black,
  },
  schemaBackground: {
    backgroundColor: Colors.schemaColor,
  },
  schemaDarkBackground: {
    backgroundColor: Colors.schemaDarkColor,
  },
  yellowBackground: {
    backgroundColor: Colors.yellow,
  },
  redBackground: {
    backgroundColor: Colors.red,
  },
  vividOrangeBackground: {
    backgroundColor: Colors.vividOrange,
  },
  vividOrangeTint1Background: {
    backgroundColor: Colors.vividOrangeTint1,
  },
  vividOrangeTint2Background: {
    backgroundColor: Colors.vividOrangeTint2,
  },
  vividOrangeTint3Background: {
    backgroundColor: Colors.vividOrangeTint3,
  },
  vividOrangeShade1Background: {
    backgroundColor: Colors.vividOrangeShade1,
  },
  vividOrangeShade2Background: {
    backgroundColor: Colors.vividOrangeShade2,
  },
});

export interface IBackgroundColorStyles {
  transparentBackground: any;
  pinkBackground: any;
  lightPinkBackground: any;
  whiteBackground: any;
  grayBackground: any;
  lightGrayBackground: any;
  darkGrayBackground: any;
  lightBlackBackground: any;
  navyBlueBackground: any;
  blueBackground: any;
  blackBackground: any;
  schemaBackground: any;
  schemaDarkBackground: any;
  yellowBackground: any;
  redBackground: any;
  vividOrangeBackground: any;
  vividOrangeTint1Background: any;
  vividOrangeTint2Background: any;
  vividOrangeTint3Background: any;
  vividOrangeShade1Background: any;
  vividOrangeShade2Background: any;
}
