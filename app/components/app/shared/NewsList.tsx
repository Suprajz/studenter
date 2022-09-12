import React from "react";
import List from "../../base/atoms/List";
import Loader from "../../base/atoms/Loader";
import Colors from "../../../constants/Colors";
import NewsCard from "./NewsCard";
import { INewsApi } from "../../../models";

export interface INewsList {
  children?: React.ReactElement;
  news: INewsApi[];
  requested: boolean;
  onRefresh: () => void;
}

export default function NewsList({ children, news, requested = false, onRefresh }: INewsList) {
  const [refresh, setRefresh] = React.useState(false);

  const renderItem = ({ item }: { item: INewsApi }) => <NewsCard news={item} />;

  const ResetDataHandler = () => {
    setRefresh(true);
    onRefresh();
    setTimeout(() => {
      setRefresh(false);
    }, 500);
  };

  return (
    <List
      ListHeaderComponent={children ? children : null}
      contentContainerClasses={["p16"]}
      data={news}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      refreshing={refresh}
      onRefresh={ResetDataHandler}
    />
  );
}
