import React, { memo } from "react";
import moment from "moment-timezone";

import { Div } from "../../base/atoms/Div";
import { Paragraph } from "../../base/atoms/Paragraph";
import BaseImage from "../../base/atoms/BaseImage";
import DefaultImage from "../../../../assets/images/foodDefault.png";
import Button from "../../base/atoms/Button";
import navigationHelper from "../../../navigation/NavigationHelper";
import { INewsApi } from "../../../models";

export default memo(function NewsCard({ news }: { news: INewsApi }) {
  const { id = "", title = "", short_text = "", image = "", created_at } = news;
  const dateCreated = moment(created_at).format("DD MMM YYYY").toString();
  return (
    <Button
      classNames={["shadowDropApp", "whiteBackground", "mv8", "borderRadius8", "flexRow", "p16", "w100"]}
      onPress={() => {
        navigationHelper.getNavigator()?.navigate("News", { id: `${id}` });
      }}
    >
      <BaseImage
        source={
          image
            ? {
                uri: image,
              }
            : DefaultImage
        }
        width={128}
        height={128}
        classNames={["w100", "borderRadius8", "me16"]}
      />
      <Div classNames={["flexColumn", "justifyContentSpaceBetween", "w224px"]}>
        <Div>
          <Paragraph classNames={["primaryFontBold", "font20"]}>{title}</Paragraph>
          <Paragraph classNames={["primaryFont", "font16"]}>{short_text}</Paragraph>
        </Div>
        <Paragraph classNames={["alignSelfEnd", "me16"]}>{dateCreated}</Paragraph>
      </Div>
    </Button>
  );
});
