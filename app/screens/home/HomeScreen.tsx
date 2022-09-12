import * as React from "react";
import HomeTemplate from "../../components/app/home/HomeTemplate";
import { ScreenLayout } from "../../components/base/molecules/ScreenLayout";
import { RootStackScreenProps } from "../../models/types";

export default function HomeScreen(props: RootStackScreenProps<"Home">) {
  return (
    <ScreenLayout theme="light">
      <HomeTemplate />
    </ScreenLayout>
  );
}
