import React, { useState, useEffect, LegacyRef } from "react";
import Input, { InputClassNames } from "../../base/atoms/Input";
import { KeyboardTypeOptions, ReturnKeyTypeOptions, TextInput } from "react-native";
import { Div } from "../../base/atoms/Div";
import { Paragraph } from "../../base/atoms/Paragraph";
import Button, { ButtonClassNames } from "../../base/atoms/Button";
import Colors from "../../../constants/Colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

interface AppInputProps {
  value: string;
  deleteOnButton?: boolean;
  errorMessage?: string;
  onTextChange: (value: string) => void;
  passwordTextInput?: boolean;
  label?: string;
  labelTheme?: "Light" | "Dark";
  multiline?: boolean;
  placeholder?: string;
  defaultValue?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  keyboardType?: KeyboardTypeOptions;
  onFocus?: () => void;
  onBlur?: () => void;
  isSearch?: boolean;
  onSubmitEditing?: () => void;
  blurOnSubmit?: boolean;
}

export const AppInput = React.forwardRef<TextInput, AppInputProps>((props, ref) => {
  const {
    value,
    deleteOnButton = false,
    errorMessage = "",
    onTextChange,
    passwordTextInput = false,
    multiline = false,
    label = "",
    placeholder = "",
    defaultValue = "",
    keyboardType = "default",
    onBlur,
    onFocus,
    returnKeyType,
    onSubmitEditing,
    blurOnSubmit = true,
    isSearch = false,
    labelTheme,
  } = props;
  const [showP, setShowP] = useState(false);
  const [resetValue, setResetValue] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const buttonStyles: ButtonClassNames[] = ["absolute", "right0", "vividOrangeTint3Background", "borderRadius8", "p4", "me16", "shadowDropApp"];
  useEffect(() => {
    if (resetValue) {
      setResetValue(false);
    }
  }, [value]);

  return (
    <Div classNames={["mv8", "flexGrow1"]}>
      <Div classNames={["w100", "justifyContentCenter"]}>
        {isSearch && !value && !isFocus ? (
          <MaterialIcons style={{ position: "absolute", zIndex: 10, marginStart: 8 }} name="search" size={26} color={Colors.vividOrangeShade2} />
        ) : null}
        <Input
          ref={ref}
          value={resetValue ? "" : value}
          returnKeyType={returnKeyType}
          passwordTextInput={!showP && passwordTextInput}
          onTextChange={onTextChange}
          multiline={multiline}
          placeholder={placeholder}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          classNames={[
            multiline ? "minH128px" : "h64px",
            multiline ? "p16" : "ph16",
            "borderRadius8",
            "colorVividOrangeShade2",
            passwordTextInput ? "pe48" : "ph16",
            "shadowDropApp",
            ...(!!errorMessage ? (["redBackground"] as InputClassNames[]) : (["whiteBackground"] as InputClassNames[])),
          ]}
          autoCapitalize={"none"}
          onFocus={() => {
            if (onFocus) onFocus();
            setIsFocus(true);
          }}
          onBlur={() => {
            if (onBlur) onBlur();
            setIsFocus(false);
          }}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
        />
        {passwordTextInput ? (
          <Button
            onPress={() => {
              setShowP((prev) => !prev);
            }}
            classNames={[...buttonStyles]}
          >
            <Ionicons name={showP ? "ios-eye-off-outline" : "ios-eye-outline"} size={26} color={Colors.white} />
          </Button>
        ) : null}
        {deleteOnButton && value ? (
          <Button
            classNames={[...buttonStyles]}
            onPress={() => {
              setResetValue(true);
              onTextChange("");
            }}
          >
            <MaterialIcons name="clear" size={26} color={Colors.white} />
          </Button>
        ) : null}
      </Div>
      {errorMessage ? <Paragraph classNames={["colorRed", "mv10", "fontBold"]}>{errorMessage}</Paragraph> : null}
    </Div>
  );
});
