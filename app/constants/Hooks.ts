import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as Updates from "expo-updates";
import * as React from "react";
import { Animated } from "react-native";
import Colors from "./Colors";

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          openSans: require("../../assets/fonts/OpenSans-Regular.ttf"),
          openSansBold: require("../../assets/fonts/OpenSans-Bold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

export const useChangeOpacity = () => {
  const opacity = React.useRef(new Animated.Value(0.5));

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: false,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.5,
          useNativeDriver: false,
          duration: 1000,
        }),
      ])
    ).start();
  }, [opacity]);

  return opacity.current;
};

export const useTextColorAnimation = (value: any) => {
  const animatedValue = new Animated.Value(value);

  const animateTextColor = animatedValue.interpolate({
    inputRange: [0, 300],
    outputRange: [Colors.blue, Colors.lightPink],
  });

  setTimeout(() => {
    Updates.reloadAsync();
  }, 5000);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 300,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, []);

  return animateTextColor;
};
