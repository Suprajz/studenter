import { Dispatch } from "redux";
import { StoreAction, StoreActionResolver } from "../../../models/types";
import { ISearchNewsPayload } from "../../../dto/ISearchPayload";
import NewsActions from "../../actions/NewsActions";
import { INewsApi } from "../../../models";
import NewsService from "../../../services/news/NewsService";

const search: StoreActionResolver = async (dispatch: Dispatch, payload: ISearchNewsPayload): Promise<StoreAction | void> => {
  if (!payload.search && !payload.sort) {
    return NewsActions.setSearchNews([]);
  }
  dispatch(NewsActions.setNewsRequest(true));
  try {
    const news: INewsApi[] | null = await NewsService.search(payload);
    if (!!news) {
      dispatch(NewsActions.setSearchNews(news));
    }
    return NewsActions.setNewsRequest(false);
  } catch (error) {
    dispatch(NewsActions.setNewsRequest(false));
    throw error;
  }
};

export default search;
