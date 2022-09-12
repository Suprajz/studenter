import * as React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import { IGlobalStyles, classNames } from "../../../styles";
import { RootState } from "../../../store/store";
import { BaseProps } from "../../../models/types";
import { DivStyle } from "./Div";
import Loader, { LoaderProps } from "./Loader";

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      ref={props.rf}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={classNames(props.classNames || [], ButtonClasses, ["btn", "btnPrimary"])}
      disabled={props.disabled}
    >
      {!!props.title && !props.isLoading ? <Text style={classNames(props.titleClasses || [], ButtonClasses, ["btnPrimaryTitle"])}>{props.title}</Text> : null}
      {props.isLoading ? <Loader {...(props.loader || { size: "large", color: Colors.white })} /> : null}
      {!props.isLoading && !props.title ? props.children : null}
    </TouchableOpacity>
  );
}

const ButtonClasses = StyleSheet.create<IButtonClasses>({
  btn: {
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    alignSelf: "center",
    marginVertical: 10,
    padding: 10,
  },
  btnPrimary: {
    borderColor: Colors.blue,
    backgroundColor: Colors.navyBlue,
  },
  btnPrimaryTitle: {
    textAlign: "center",
    fontSize: 16,
    fontFamily: Fonts.primaryBoldFont,
    color: Colors.blue,
  },
  btnModal: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuItemActive: {
    width: 100,
    height: 50,
    backgroundColor: Colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  menuItem: {
    width: 100,
    height: 50,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: { color: Colors.blue, fontSize: 16 },
  menuTextActive: { color: Colors.white, fontSize: 16 },
  btnDropdown: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

interface IButtonClasses {
  btn: DivStyle;
  btnPrimary: DivStyle;
  btnPrimaryTitle: TextStyle;
  btnModal: DivStyle;
  menuItemActive: DivStyle;
  menuItem: DivStyle;
  menuText: TextStyle;
  menuTextActive: TextStyle;
  btnDropdown: DivStyle;
}

export type ButtonClassNames = keyof IButtonClasses | keyof IGlobalStyles;

interface ButtonProps extends BaseProps, TouchableOpacityProps {
  onPress?: () => void;
  onLongPress?: () => void;
  classNames?: ButtonClassNames[];
  title?: string;
  titleClasses?: ButtonClassNames[];
  disabled?: boolean;
  translate?: boolean;
  loader?: LoaderProps;
  isLoading?: boolean;
  rf?: React.MutableRefObject<any>;
}
