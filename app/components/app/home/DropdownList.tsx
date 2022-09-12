import React, { useEffect, useState } from "react";
import Button from "../../base/atoms/Button";
import { Div, DivClassNames } from "../../base/atoms/Div";
import { Paragraph } from "../../base/atoms/Paragraph";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { ScrollDiv } from "../../base/atoms/ScrollDiv";

interface IDropdownList {
  list: string[];
  onSelectionChange: (selected: string) => void;
  classNames?: DivClassNames[];
  selected: string;
}

export const DropdownList = ({ selected, list, onSelectionChange, classNames = ["w128px", "ms8"] }: IDropdownList) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Div classNames={["flexColumn", ...classNames]}>
      <Button
        classNames={[
          "transparentBackground",
          "borderRadius8",
          "whiteBackground",
          "flexRow",
          "alignItemsCenter",
          "p16",
          "h64px",
          "justifyContentSpaceBetween",
          "shadowDropApp",
          "mt8",
        ]}
        onPress={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        <Paragraph classNames={["colorVividOrangeShade2"]}>{selected}</Paragraph>
        <Div classNames={["vividOrangeTint3Background", "borderRadius8", "ms8"]}>
          <AntDesign name={isVisible ? "up" : "down"} size={28} color={Colors.white} />
        </Div>
      </Button>
      <ScrollDiv
        classNames={[
          "w100",
          "mt8",
          "borderRadius8",
          "whiteBackground",
          "shadowDropApp",
          "pictureStandard",
          "alignSelfEnd",
          "h120px",
          isVisible ? "relative" : "dNone",
        ]}
        contentContainerClassNames={["p8"]}
        nestedScrollEnabled={true}
      >
        {list.map((item, i) => (
          <Button
            classNames={["justifyContentCenter", "pv16", i % 2 === 0 ? "vividOrangeTint1Background" : "transparentBackground", "ph8", "borderRadius8"]}
            key={item}
            onPress={() => {
              onSelectionChange(item);
              setIsVisible(false);
            }}
            title={item}
            titleClasses={["colorVividOrangeShade2"]}
          />
        ))}
        {selected !== "Sortiraj" ? (
          <Button
            classNames={[
              "justifyContentCenter",
              "pv16",
              list.length % 2 === 0 ? "vividOrangeTint1Background" : "transparentBackground",
              "ph8",
              "borderRadius8",
            ]}
            key={"delete"}
            onPress={() => {
              onSelectionChange("");
              setIsVisible(false);
            }}
            title={"Resetuj filter"}
            titleClasses={["colorVividOrangeShade2"]}
          />
        ) : null}
      </ScrollDiv>
    </Div>
  );
};
