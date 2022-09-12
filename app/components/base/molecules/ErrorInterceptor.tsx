import React from "react";
/* Components and Layout */
import { ScreenLayout } from "../../../components/base/molecules/ScreenLayout";
import { Div } from "../atoms/Div";
import Button from "../atoms/Button";
import { AnimatedParagraph } from "../atoms/AnimatedParagraph";
import { Paragraph } from "../atoms/Paragraph";
import Logo from "./Logo";
/* Services */
import * as Updates from "expo-updates";
/* Animation */
import { useTextColorAnimation } from "../../../constants/Hooks";

export default function ErrorInterceptor() {
  const animate = useTextColorAnimation(0);

  return (
    <ScreenLayout>
      <Div classNames={["flexContentCenter", "h100", "w100"]}>
        <Div classNames={["w80", "alignItemsCenter"]}>
          <Div classNames={["mv20"]}>
            <Logo height={120} width={120} />
          </Div>

          <AnimatedParagraph classNames={["primaryFontBold", "font20"]} animation={{ type: "color", value: animate }}>
            Sorry... Something went wrong!
          </AnimatedParagraph>
          <Paragraph classNames={["colorBlue", "font20", "primaryFontBold", "mv10"]}>Please reload the App!</Paragraph>
          <Button title="Reload" onPress={() => Updates.reloadAsync()}></Button>
        </Div>
      </Div>
    </ScreenLayout>
  );
}
