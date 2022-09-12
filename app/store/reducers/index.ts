import { combineReducers } from "redux";
import newsReducer from "./NewsReducer";

const reducers = combineReducers({
  newsState: newsReducer,
});

export default reducers;
