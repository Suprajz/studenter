import { INewsApi } from "../../models/INews";
import { SET_NEWS, SET_NEWS_REQUEST, SET_NEWS_BY_ID, SET_SEARCH_NEWS } from "../action-types/NewsActionTypes";
import { StoreAction } from "../../models/types";

interface INewsState {
  list: INewsApi[];
  requested: boolean;
  searchList: INewsApi[];
  item: INewsApi | null;
}

const initialNewsState: INewsState = {
  list: [],
  searchList: [],
  requested: false,
  item: null,
};

function newsReducer(state = initialNewsState, action: StoreAction) {
  switch (action.type) {
    case SET_NEWS_REQUEST: {
      return {
        ...state,
        requested: action.payload,
      };
    }
    case SET_NEWS: {
      return {
        ...state,
        list: [...action.payload],
      };
    }
    case SET_NEWS_BY_ID: {
      return {
        ...state,
        item: { ...action.payload },
      };
    }
    case SET_SEARCH_NEWS: {
      return {
        ...state,
        searchList: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}

export default newsReducer;
