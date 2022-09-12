import { ISearchNewsPayload } from "../../dto/ISearchPayload";
import { INewsApi } from "../../models";
import ApiBase from "../api/ApiService";
import routes from "../api/routes";

const NewsService = () => {
  const search = async (payload: ISearchNewsPayload): Promise<INewsApi[] | null> => {
    const news = await ApiBase.get<INewsApi[]>(
      routes.news.search + `${payload.search.trim() ? "search=" + payload.search : ""}` + `${payload.sort ? "&sort=" + payload.sort : ""}`
    );
    if (!news) return null;
    return news;
  };
  const getNews = async (): Promise<INewsApi[] | null> => {
    const news = await ApiBase.get<INewsApi[]>(routes.news.getNews);
    if (!news || !!!news.length) return null;
    return news;
  };
  const getNewsById = async (id: string): Promise<INewsApi | null> => {
    const news = await ApiBase.get<INewsApi>(routes.news.getNewsById.replace(":id", id));
    if (!news) return null;
    return news;
  };

  return {
    search,
    getNews,
    getNewsById,
  };
};

export default NewsService();
