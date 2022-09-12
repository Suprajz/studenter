import * as React from "react";
import { useRef, useEffect } from "react";
import { RefreshControl, ScrollView, ScrollViewProps, ViewStyle } from "react-native";
import Colors from "../../../constants/Colors";
import { IGlobalStyles, classNames } from "../../../styles";
import { BaseProps } from "../../../models/types";

export function ScrollDiv(props: ScrollDivProps) {
  const scrollRef = useRef<ScrollView>(null);
  const ScrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };
  useEffect(() => {
    if (props.scrollToTop) ScrollToTop();
  }, [props.scrollToTop]);
  return (
    <ScrollView
      {...props}
      ref={scrollRef}
      refreshControl={
        !!props.onRefresh ? <RefreshControl onRefresh={props.onRefresh} refreshing={!!props.refreshing} tintColor={Colors.lightGray} /> : undefined
      }
      style={[props.style, classNames(props.classNames || [])]}
      contentContainerStyle={[classNames(props.contentContainerClassNames || [])]}
    >
      {props.children}
    </ScrollView>
  );
}

export type DivClassNames = keyof IGlobalStyles;
export type ScrollDivStyle = ViewStyle;

export interface ScrollDivProps extends BaseProps, ScrollViewProps {
  classNames?: DivClassNames[];
  contentContainerClassNames?: DivClassNames[];
  width?: string | number;
  height?: string | number;
  onRefresh?: () => void;
  refreshing?: boolean;
  scrollToTop?: boolean;
}
