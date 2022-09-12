import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useCachedResources } from "./app/constants/Hooks";
import Navigation from "./app/navigation";
import Toast from "react-native-toast-message";
import { store } from "./app/store/store";
import { Provider } from "react-redux";
import AlertService from "./app/services/alert/AlertService";
import ErrorBoundary from "./app/services/error/error-boundary/ErrorBoundary";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ErrorBoundary>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
          <Toast config={AlertService.toastConfig} />
        </ErrorBoundary>
      </Provider>
    );
  }
}
