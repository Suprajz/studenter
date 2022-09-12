import { StoreActionResolverRegister } from "../../../models/types";
import { GET_NEWS, GET_NEWS_BY_ID, SEARCH_NEWS } from "../../action-types/NewsActionTypes";
import getNews from "./GetNews";
import getNewsById from "./GetNewsById";
import search from "./Search";

const newsActionResolverRegister: StoreActionResolverRegister = {
  [GET_NEWS]: getNews,
  [GET_NEWS_BY_ID]: getNewsById,
  [SEARCH_NEWS]: search,
};

export default newsActionResolverRegister;
