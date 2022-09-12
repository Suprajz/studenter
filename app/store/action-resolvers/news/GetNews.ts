import { Dispatch } from "redux";
import { StoreAction, StoreActionResolver } from "../../../models/types";
import NewsActions from "../../actions/NewsActions";
import { INewsApi } from "../../../models";
import NewsService from "../../../services/news/NewsService";

const getNews: StoreActionResolver = async (dispatch: Dispatch): Promise<StoreAction | void> => {
  dispatch(NewsActions.setNewsRequest(true));
  try {
    const news: INewsApi[] | null = await NewsService.getNews();
    if (!!news) {
      dispatch(NewsActions.setNews(news));
    }
    return NewsActions.setNewsRequest(false);
  } catch (error) {
    dispatch(NewsActions.setNewsRequest(false));
    throw error;
  }
};

export default getNews;
