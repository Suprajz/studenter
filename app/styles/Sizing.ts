import { StyleSheet } from "react-native";
import { deviceDimensions, uiDimensions } from "../constants/Layout";
import * as constants from "expo-constants";

export const SizingStyles = StyleSheet.create<ISizingStyles>({
  screenWidth: {
    width: deviceDimensions.screen.width,
  },
  screenLayoutHeight: {
    height: deviceDimensions.screen.height - constants.default.statusBarHeight,
  },
  minScreenWidth: {
    minWidth: deviceDimensions.screen.width,
  },
  minScreenHeight: {
    minHeight: deviceDimensions.screen.height,
  },
  statusBarHeight: {
    height: constants.default.statusBarHeight,
  },
  tabHeaderHeight: {
    maxHeight: uiDimensions.homeHeaderHeight,
  },
  homeMainContentHeight: {
    height: deviceDimensions.screen.height - constants.default.statusBarHeight - uiDimensions.homeHeaderHeight - uiDimensions.drawerHeaderHeight,
  },
  myJobsHeaderHeight: {
    height: uiDimensions.myJobsHeaderHeight,
  },
  myJobsContentHeight: {
    height: deviceDimensions.screen.height - constants.default.statusBarHeight - uiDimensions.drawerHeaderHeight - uiDimensions.myJobsHeaderHeight,
  },
  drawerScreenHeight: {
    height: deviceDimensions.screen.height - constants.default.statusBarHeight - uiDimensions.drawerHeaderHeight,
  },
  w10: {
    width: "10%",
  },
  w33: {
    width: "33.33333%",
  },
  w40: {
    width: "40%",
  },
  w50: {
    width: "50%",
  },
  w80: {
    width: "80%",
  },
  w90: {
    width: "90%",
  },
  w100: {
    width: "100%",
  },
  w96px: {
    width: 96,
  },
  w128px: {
    width: 128,
  },
  w224px: {
    width: 224,
  },
  minW80: {
    minWidth: "80%",
  },
  h1px: {
    height: 1,
  },
  h10: {
    height: "10%",
  },
  h25: {
    height: "25%",
  },
  h50: {
    height: "50%",
  },
  h64px: {
    height: 64,
  },
  h80px: {
    height: 80,
  },
  h100: {
    height: "100%",
  },
  h120px: {
    height: 120,
  },
  minH100: {
    minHeight: "100%",
  },
  minH128px: {
    minHeight: 128,
  },
  h300px: {
    height: 300,
  },
  square32px: {
    height: 32,
    width: 32,
  },
  pictureStandard: {
    width: deviceDimensions.screen.width - 32,
    height: deviceDimensions.screen.width - 32,
  },
});

export interface ISizingStyles {
  screenWidth: any;
  screenLayoutHeight: any;
  minScreenWidth: any;
  minScreenHeight: any;
  statusBarHeight: any;
  tabHeaderHeight: any;
  homeMainContentHeight: any;
  myJobsHeaderHeight: any;
  myJobsContentHeight: any;
  drawerScreenHeight: any;
  w10: any;
  w33: any;
  w40: any;
  w50: any;
  w80: any;
  w90: any;
  w100: any;
  w96px: any;
  w128px: any;
  w224px: any;
  minW80: any;
  h1px: any;
  h10: any;
  h25: any;
  h50: any;
  h64px: any;
  h80px: any;
  h100: any;
  h120px: any;
  minH100: any;
  minH128px: any;
  h300px: any;
  square32px: any;
  pictureStandard: any;
}
