import * as React from "react";
import NewsForm from "./NewsForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { ScrollDiv } from "../../base/atoms/ScrollDiv";
import Loader from "../../base/atoms/Loader";
import { useRoute, useFocusEffect, useNavigation } from "@react-navigation/native";
import NewsActions from "../../../store/actions/NewsActions";
import Button from "../../base/atoms/Button";
import { AntDesign } from "@expo/vector-icons";

export default function NewsTemplate() {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const requested = useSelector((state: RootState) => state.newsState.requested);
  const route = useRoute();
  useFocusEffect(
    React.useCallback(() => {
      const { id } = (route.params as { id: string }) || "";
      dispatch(NewsActions.getNewsById(id));
      return () => {
        dispatch(NewsActions.setNewsbyId(null));
      };
    }, [])
  );
  return (
    <ScrollDiv contentContainerClassNames={["minH100"]}>
      <Button
        classNames={["transparentBackground", "ms24", "mt24"]}
        onPress={() => {
          navigate.goBack();
        }}
      >
        <AntDesign name="leftcircleo" size={32} color="black" />
      </Button>
      {requested ? <Loader animating={requested} /> : <NewsForm />}
    </ScrollDiv>
  );
}
