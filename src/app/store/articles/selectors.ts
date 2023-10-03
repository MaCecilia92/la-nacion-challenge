import { type RootState } from "../index";
import { type ArticleResponse } from "./initialState";

export const getFilteredArticles = (state: RootState) =>
  state.articles.filteredArticles;

export const getTagsArticles = (state: RootState) => state.articles.tags;
