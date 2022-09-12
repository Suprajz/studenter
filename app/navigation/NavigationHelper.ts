import { NavigationContainerRef } from "@react-navigation/core";
import { RootStackParamList } from "../models/types";

class NavigationHelper {
  private static instance: NavigationHelper;
  private navigatorRef: NavigationContainerRef<RootStackParamList> | null = null;
  private history: string[] = [];

  private constructor() {}

  public setNavigator(navigator: NavigationContainerRef<RootStackParamList> | null) {
    this.navigatorRef = navigator;
  }

  public getNavigator(): NavigationContainerRef<RootStackParamList> | null {
    this.history.push(this.navigatorRef?.getCurrentRoute()?.name as string);
    return this.navigatorRef;
  }
  public getHistory(): string[] {
    return this.history;
  }
  public static getInstance() {
    if (!NavigationHelper.instance) {
      NavigationHelper.instance = new NavigationHelper();
    }
    return NavigationHelper.instance;
  }
}

const navigationHelper = NavigationHelper.getInstance();

export default navigationHelper;
