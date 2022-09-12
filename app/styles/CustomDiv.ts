import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { deviceDimensions } from "../constants/Layout";

export const CustomDivStyles = StyleSheet.create<ICustomDivStyles>({
  // triangleDivDown -  it's UI setup for JobCard component
  triangleDivDown: {
    borderTopWidth: 20,
    borderTopColor: Colors.darkGray,
    borderStartWidth: deviceDimensions.screen.width / 2 - 20,
    borderStartColor: "transparent",
    borderEndColor: "transparent",
    borderEndWidth: deviceDimensions.screen.width / 2 - 20,
    height: 0,
  },
  shadowDrop: {
    shadowColor: Colors.navyBlue,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowDropApp: {
    shadowColor: Colors.purple,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 8,
  },
  shadowTopDrop: {
    shadowColor: Colors.darkGray,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  errorNumInfo: {
    marginStart: -12,
    marginTop: -12,
    borderWidth: 2,
    borderColor: Colors.vividOrangeTint2,
    width: 24,
    height: 24,
  },
  tabWidth2: {
    width: deviceDimensions.screen.width / 2 - 36,
  },
  tabWidth3: {
    width: deviceDimensions.screen.width / 3 - 21.33,
  },
});

export interface ICustomDivStyles {
  triangleDivDown: any;
  shadowDrop: any;
  shadowDropApp: any;
  shadowTopDrop: any;
  errorNumInfo: any;
  tabWidth2: any;
  tabWidth3: any;
}
