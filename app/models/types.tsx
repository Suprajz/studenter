/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Action, Dispatch } from "redux";
import { RootState } from "../store/store";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  News: { id: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, Screen>;

export interface BaseProps {
  children?: React.ReactNode;
}

export interface StoreAction extends Action {
  type: string;
  payload?: any;
}

export type StoreActionResolver = (dispatch: Dispatch, payload: any, currentState: RootState) => Promise<StoreAction | void>;

export type StoreActionResolverRegister = { [key: string]: StoreActionResolver };
