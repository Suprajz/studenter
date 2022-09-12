import * as React from "react";
import { FlatList, FlatListProps, RefreshControl } from "react-native";
import Colors from "../../../constants/Colors";
import { classNames } from "../../../styles";
import { DivClassNames } from "./Div";

export default function List(props: ListProps) {
  return (
    <FlatList
      {...props}
      refreshControl={
        !!props.onRefresh ? <RefreshControl onRefresh={props.onRefresh} refreshing={!!props.refreshing} tintColor={Colors.lightGray} /> : undefined
      }
      style={classNames(props.classNames || [])}
      contentContainerStyle={classNames(props.contentContainerClasses || [])}
    />
  );
}

interface ListProps extends FlatListProps<any> {
  classNames?: DivClassNames[];
  contentContainerClasses?: DivClassNames[];
  onRefresh?: () => void;
  refreshing?: boolean;
}
