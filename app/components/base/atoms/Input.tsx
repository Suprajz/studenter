import * as React from "react";
import { ReturnKeyTypeOptions, StyleSheet, TextInput, TextInputIOSProps, KeyboardTypeOptions } from "react-native";
import Colors from "../../../constants/Colors";
import Fonts from "../../../constants/Fonts";
import { IGlobalStyles, classNames } from "../../../styles";
import { DivStyle } from "./Div";

export const Input = React.forwardRef<TextInput, InputProps>((props, ref) => {
  return (
    <TextInput
      textContentType={props.textContentTypeIOS || "none"}
      style={classNames(props.classNames || [], InputClasses, ["input"])}
      onChangeText={props.onTextChange}
      placeholder={props.placeholder}
      placeholderTextColor={props.placeHolderTextColor || Colors.lightGray}
      secureTextEntry={props.passwordTextInput}
      multiline={props.multiline}
      textAlignVertical={props.multiline ? "top" : "center"}
      returnKeyType={props.returnKeyType}
      defaultValue={props.defaultValue}
      autoCapitalize={props.autoCapitalize}
      value={props.value}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      keyboardType={props.keyboardType}
      onSubmitEditing={props.onSubmitEditing}
      blurOnSubmit={props.blurOnSubmit}
      ref={ref}
    />
  );
});

const InputClasses = StyleSheet.create<IInputClasses>({
  input: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: Colors.darkGray,
    fontSize: 14,
    fontFamily: Fonts.primaryFont,
    color: Colors.lightGray,
  },
});

interface IInputClasses {
  input: DivStyle;
}

export type InputClassNames = keyof IInputClasses | keyof IGlobalStyles;

interface InputProps {
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
  onTextChange: (value: string) => void;
  value: string;
  placeholder?: string;
  placeHolderTextColor?: string;
  translate?: boolean;
  textContentTypeIOS?: TextInputIOSProps["textContentType"];
  passwordTextInput?: boolean;
  classNames?: InputClassNames[];
  multiline?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  defaultValue?: string;
  height?: number;
  keyboardType?: KeyboardTypeOptions;
  onFocus?: () => void;
  onBlur?: () => void;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
}
export default Input;
