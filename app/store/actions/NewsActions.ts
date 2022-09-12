import { ISearchNewsPayload } from "../../dto/ISearchPayload";
import { INewsApi } from "../../models";
import { StoreAction } from "../../models/types";
import { SET_NEWS, SET_NEWS_REQUEST, GET_NEWS, GET_NEWS_BY_ID, SEARCH_NEWS, SET_NEWS_BY_ID, SET_SEARCH_NEWS } from "../action-types/NewsActionTypes";

const NewsActions = () => {
  const setNewsRequest = (requested: boolean): StoreAction => ({
    type: SET_NEWS_REQUEST,
    payload: requested,
  });
  const getNews = (): StoreAction => ({
    type: GET_NEWS,
    payload: undefined,
  });
  const getNewsById = (id: string): StoreAction => ({
    type: GET_NEWS_BY_ID,
    payload: id,
  });
  const setNews = (list: INewsApi[]): StoreAction => ({
    type: SET_NEWS,
    payload: [...list],
  });
  const searchNews = (payload: ISearchNewsPayload | null): StoreAction => ({
    type: SEARCH_NEWS,
    payload: payload ? { ...payload } : null,
  });
  const setSearchNews = (list: INewsApi[]): StoreAction => ({
    type: SET_SEARCH_NEWS,
    payload: [...list],
  });
  const setNewsbyId = (item: INewsApi | null): StoreAction => ({
    type: SET_NEWS_BY_ID,
    payload: item ? { ...item } : null,
  });

  return {
    setNewsRequest,
    getNews,
    setNews,
    getNewsById,
    searchNews,
    setSearchNews,
    setNewsbyId,
  };
};

export default NewsActions();
