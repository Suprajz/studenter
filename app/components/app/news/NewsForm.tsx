import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Div } from "../../base/atoms/Div";
import { Paragraph } from "../../base/atoms/Paragraph";
import moment from "moment";
import { Heading } from "../../base/atoms/Heading";
import DefaultImage from "../../../../assets/images/foodDefault.png";
import BaseImage from "../../base/atoms/BaseImage";
import { deviceDimensions } from "../../../constants/Layout";

export default function NewsForm() {
  const {
    title = "",
    text = "",
    image = "",
    created_at,
  } = useSelector((state: RootState) => (state.newsState.item ? state.newsState.item : { id: "", title: "", text: "", image: "" }));
  const dateCreated = moment(created_at).format("DD MMM YYYY").toString();

  return (
    <Div classNames={["ph24", "pv32", "mt16", "flexGrow1"]}>
      <BaseImage
        source={
          image
            ? {
                uri: image,
              }
            : DefaultImage
        }
        height={deviceDimensions.screen.width - 32}
        classNames={["w100", "borderRadius8", "mb32"]}
      />
      <Heading>{title}</Heading>
      <Paragraph>{text}</Paragraph>
      <Paragraph classNames={["mt16"]}>{dateCreated}</Paragraph>
    </Div>
  );
}
