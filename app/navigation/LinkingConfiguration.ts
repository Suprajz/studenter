/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import environment from "../../config/environment";

import { RootStackParamList } from "../models/types";
const prefix = Linking.makeUrl("/");
const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [environment.webUrl.host, prefix],
  config: {
    screens: {
      Home: "home",
      News: "news/:id",
    },
  },
};

export default linking;
