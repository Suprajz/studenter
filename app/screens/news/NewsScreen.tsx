import * as React from "react";
import NewsTemplate from "../../components/app/news/NewsTemplate";
import { ScreenLayout } from "../../components/base/molecules/ScreenLayout";
import { RootStackScreenProps } from "../../models/types";

export default function NewsScreen(props: RootStackScreenProps<"News">) {
  return (
    <ScreenLayout theme="light">
      <NewsTemplate />
    </ScreenLayout>
  );
}
