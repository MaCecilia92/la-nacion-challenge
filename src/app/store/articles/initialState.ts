import type { Articles, TagsArray } from "../../utils/interfaces";

export interface ArticleResponse {
  articles: Articles[];
  filteredArticles: Articles[];
  tags: TagsArray[];
  isLoading: boolean;
  error: string;
}

export const ArticlesData: ArticleResponse = {
  articles: [],
  filteredArticles: [],
  tags: [],
  isLoading: false,
  error: "",
};
