import { Dimensions } from "react-native";
import * as constants from "expo-constants";

const statusBarHeight = constants.default.statusBarHeight;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export const deviceDimensions = {
  window: {
    width: windowWidth,
    height: windowHeight,
  },
  screen: {
    width: screenWidth,
    height: screenHeight,
  },
  isSmallDevice: windowWidth < 375,
};

export const uiDimensions = {
  drawerHeaderHeight: 40,
  homeHeaderHeight: 180,
  myJobsHeaderHeight: 50,
  statusbar: statusBarHeight,
};
