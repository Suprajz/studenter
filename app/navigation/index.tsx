/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./root-navigator/RootNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import navigationHelper from "./NavigationHelper";
import { DefaultTheme } from "@react-navigation/native";
import Colors from "../constants/Colors";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

export default function Navigation() {
  return (
    <>
      <NavigationContainer theme={MyTheme} linking={LinkingConfiguration} ref={(ref) => navigationHelper.setNavigator(ref)}>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
