import { Dispatch } from "redux";
import { StoreAction, StoreActionResolver } from "../../../models/types";
import NewsActions from "../../actions/NewsActions";
import { INewsApi } from "../../../models";
import NewsService from "../../../services/news/NewsService";

const getNewsById: StoreActionResolver = async (dispatch: Dispatch, payload: number): Promise<StoreAction | void> => {
  dispatch(NewsActions.setNewsRequest(true));
  try {
    const news: INewsApi | null = await NewsService.getNewsById(payload);
    if (!!news) {
      dispatch(NewsActions.setNewsbyId(news));
    }
    return NewsActions.setNewsRequest(false);
  } catch (error) {
    dispatch(NewsActions.setNewsRequest(false));
    throw error;
  }
};

export default getNewsById;
