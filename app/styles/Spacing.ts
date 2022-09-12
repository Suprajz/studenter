import { StyleSheet } from "react-native";
import { deviceDimensions, uiDimensions } from "../constants/Layout";
import * as constants from "expo-constants";

export const SpacingStyles = StyleSheet.create<ISpacingStyles>({
  mtN32: {
    marginTop: -32,
  },
  m0: {
    margin: 0,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m20: {
    margin: 20,
  },
  m8: {
    margin: 8,
  },
  ms0: {
    marginStart: 0,
  },
  ms5: {
    marginStart: 5,
  },
  ms8: {
    marginStart: 8,
  },
  ms10: {
    marginStart: 10,
  },
  ms16: {
    marginStart: 16,
  },
  ms20: {
    marginStart: 20,
  },
  ms24: {
    marginStart: 24,
  },
  me5: {
    marginEnd: 5,
  },
  me10: {
    marginEnd: 10,
  },
  me16: {
    marginEnd: 16,
  },
  me20: {
    marginEnd: 20,
  },
  mb5: {
    marginBottom: 5,
  },
  mb8: {
    marginBottom: 8,
  },
  mb10: {
    marginBottom: 10,
  },
  mb16: {
    marginBottom: 16,
  },
  mb20: {
    marginBottom: 20,
  },
  mb32: {
    marginBottom: 32,
  },
  mbBottomTab: {
    marginBottom: deviceDimensions.screen.height - deviceDimensions.window.height,
  },
  mbBottomTabWithAction: {
    marginBottom: 120,
  },
  mt0: {
    marginTop: 0,
  },
  mt5: {
    marginTop: 5,
  },
  mt10: {
    marginTop: 10,
  },
  mt12: {
    marginTop: 12,
  },
  mt20: {
    marginTop: 20,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt24: {
    marginTop: 24,
  },
  mt32: {
    marginTop: 32,
  },
  mt64: {
    marginTop: 64,
  },
  mt__StBar: {
    marginTop: constants.default.statusBarHeight,
  },
  mv5: {
    marginVertical: 5,
  },
  mv16: {
    marginVertical: 16,
  },
  mv8: {
    marginVertical: 8,
  },
  mv10: {
    marginVertical: 10,
  },
  mv20: {
    marginVertical: 20,
  },
  mv48: {
    marginVertical: 48,
  },
  mv64: {
    marginVertical: 64,
  },
  mv80: {
    marginVertical: 80,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mh8: {
    marginHorizontal: 8,
  },
  mh10: {
    marginHorizontal: 10,
  },
  mh20: {
    marginHorizontal: 20,
  },
  //
  mbDHeaderHeight: {
    marginBottom: uiDimensions.drawerHeaderHeight,
  },
  mbDHeaderHeight10: {
    marginBottom: uiDimensions.drawerHeaderHeight + 10,
  },
  p0: {
    padding: 0,
  },
  p4: {
    padding: 4,
  },
  p5: {
    padding: 5,
  },
  p8: {
    padding: 8,
  },
  p10: {
    padding: 10,
  },
  p16: {
    padding: 16,
  },
  p20: {
    padding: 20,
  },
  p24: {
    padding: 24,
  },
  p32: {
    padding: 32,
  },
  p64: {
    padding: 64,
  },
  pt10: {
    paddingTop: 10,
  },
  pt4: {
    paddingTop: 4,
  },
  pt8: {
    paddingTop: 8,
  },
  pt16: {
    paddingTop: 16,
  },
  pt24: {
    paddingTop: 24,
  },
  pt32: {
    paddingTop: 32,
  },
  pt64: {
    paddingTop: 64,
  },
  pb4: {
    paddingBottom: 4,
  },
  pb8: {
    paddingBottom: 8,
  },
  pb16: {
    paddingBottom: 16,
  },
  pb24: {
    paddingBottom: 24,
  },
  pb32: {
    paddingBottom: 32,
  },
  pb64: {
    paddingBottom: 64,
  },
  pv4: {
    paddingVertical: 4,
  },
  pv8: {
    paddingVertical: 8,
  },
  pv16: {
    paddingVertical: 16,
  },
  pv24: {
    paddingVertical: 24,
  },
  pv32: {
    paddingVertical: 32,
  },
  pv64: {
    paddingVertical: 64,
  },
  ph4: {
    paddingHorizontal: 4,
  },
  ph8: {
    paddingHorizontal: 8,
  },
  ph16: {
    paddingHorizontal: 16,
  },
  ph24: {
    paddingHorizontal: 24,
  },
  ph32: {
    paddingHorizontal: 32,
  },
  ph64: {
    paddingHorizontal: 64,
  },
  pe48: {
    paddingEnd: 48,
  },
  pe72: {
    paddingEnd: 72,
  },
  pt__StBar: {
    paddingTop: uiDimensions.statusbar,
  },
  pb__StBar: {
    paddingBottom: uiDimensions.statusbar,
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb80: {
    paddingBottom: 80,
  },
  pb100: {
    paddingBottom: 100,
  },
  pbBottomTab: {
    paddingBottom: deviceDimensions.screen.height - deviceDimensions.window.height + 30,
  },
  pv5: {
    paddingVertical: 5,
  },
  pv10: {
    paddingVertical: 10,
  },
  pv20: {
    paddingVertical: 20,
  },
  pv30: {
    paddingVertical: 30,
  },
  ph5: {
    paddingHorizontal: 5,
  },
  ph10: {
    paddingHorizontal: 10,
  },
  ph20: {
    paddingHorizontal: 20,
  },
});

export interface ISpacingStyles {
  mtN32: any;
  m0: any;
  m5: any;
  m8: any;
  m10: any;
  m20: any;
  ms0: any;
  ms5: any;
  ms8: any;
  ms10: any;
  ms16: any;
  ms20: any;
  ms24: any;
  me5: any;
  me10: any;
  me16: any;
  me20: any;
  mb5: any;
  mb8: any;
  mb16: any;
  mb10: any;
  mb20: any;
  mb32: any;
  mbBottomTab: any;
  mbBottomTabWithAction: any;
  mt0: any;
  mt4: any;
  mt8: any;
  mt16: any;
  mt24: any;
  mt32: any;
  mt64: any;
  mt5: any;
  mt10: any;
  mt12: any;
  mt20: any;
  mt__StBar: any;
  mv5: any;
  mv8: any;
  mv10: any;
  mv16: any;
  mv20: any;
  mv48: any;
  mv64: any;
  mv80: any;
  mh5: any;
  mh8: any;
  mh10: any;
  mh20: any;
  mbDHeaderHeight: any;
  mbDHeaderHeight10: any;
  p0: any;
  p4: any;
  p5: any;
  p8: any;
  p10: any;
  p16: any;
  p20: any;
  p24: any;
  p32: any;
  p64: any;
  pt10: any;
  pb5: any;
  pb10: any;
  pb20: any;
  pt__StBar: any;
  pb__StBar: any;
  pb40: any;
  pb80: any;
  pb100: any;
  pv5: any;
  pbBottomTab: any;
  pv10: any;
  pv20: any;
  pv30: any;
  pt4: any;
  pt8: any;
  pt16: any;
  pt24: any;
  pt32: any;
  pt64: any;
  pb4: any;
  pb8: any;
  pb16: any;
  pb24: any;
  pb32: any;
  pb64: any;
  pv4: any;
  pv8: any;
  pv16: any;
  pv24: any;
  pv32: any;
  pv64: any;
  ph4: any;
  ph8: any;
  ph16: any;
  ph24: any;
  ph32: any;
  ph64: any;
  ph5: any;
  ph10: any;
  ph20: any;
  pe48: any;
  pe72: any;
}
