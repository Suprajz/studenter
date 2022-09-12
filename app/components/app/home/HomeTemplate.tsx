import React, { useEffect, useState } from "react";
import NewsList from "../shared/NewsList";
import { useDispatch } from "react-redux";
import NewsActions from "../../../store/actions/NewsActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useFocusEffect } from "@react-navigation/native";
import { KeyboardAvoidingDiv } from "../../base/atoms/KeyboardAvoidingDiv";
import { Platform } from "react-native";
import { AppInput } from "../shared/AppInput";
import { Div } from "../../base/atoms/Div";
import { DropdownList } from "./DropdownList";

export default function HomeTemplate() {
  const { list, requested, searchList } = useSelector((state: RootState) => state.newsState);
  const [sort, setSort] = useState<undefined | "asc" | "desc">();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(NewsActions.getNews());
      return () => {
        dispatch(NewsActions.setNews([]));
        dispatch(NewsActions.setSearchNews([]));
        setSort(undefined);
        setSearchInput("");
      };
    }, [])
  );

  useEffect(() => {
    if (!requested) {
      if (searchInput) {
        if (searchInput.trim().length > 2) {
          dispatch(NewsActions.searchNews({ search: searchInput, sort }));
          return;
        }
      }
      if (sort) {
        dispatch(NewsActions.searchNews({ search: searchInput, sort }));
        return;
      }
    }
  }, [searchInput, sort]);

  return (
    <KeyboardAvoidingDiv behavior={Platform.OS === "ios" ? "padding" : undefined} classNames={["minH100"]}>
      <NewsList
        news={searchInput.trim().length > 2 || sort ? searchList : list}
        onRefresh={() => {
          dispatch(NewsActions.getNews());
          setSearchInput("");
        }}
        requested={requested}
      >
        <Div classNames={["flexRow"]}>
          <AppInput
            isSearch={true}
            value={searchInput}
            deleteOnButton={true}
            onTextChange={(value) => {
              setSearchInput(value);
            }}
          />
          <DropdownList
            list={["Najnovije", "Najstarije"]}
            onSelectionChange={(selected) => {
              setSort(selected ? (selected === "Najnovije" ? "desc" : "asc") : undefined);
            }}
            selected={sort ? (sort === "asc" ? "Najstarije" : "Najnovije") : "Sortiraj"}
          />
        </Div>
      </NewsList>
    </KeyboardAvoidingDiv>
  );
}
