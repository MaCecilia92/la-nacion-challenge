import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ArticlesData } from "./initialState";
import { getDataBreadcrumbs } from "@/app/utils/getDataBreadcrums";
import { getDataFiltered } from "@/app/utils/getDataFiltered";

const articlesSlice = createSlice({
  name: "getImagesFromLocalstorage",
  initialState: ArticlesData,
  reducers: {
    setDataArticlesRequest: (state) => {
      state.isLoading = true;
    },
    setDataArticlesSuceeded: (state, action: PayloadAction<any[]>) => {
      state.articles = action.payload;
      state.filteredArticles = getDataFiltered(action.payload);
      state.tags = getDataBreadcrumbs(action.payload);
      state.isLoading = false;
    },
    setDataArticlesError: (state, action: PayloadAction<string>) => {
      state.error = "Error";
      state.isLoading = false;
    },
    clearArticlesData: () => ArticlesData,
  },
});

export const {
  setDataArticlesRequest,
  clearArticlesData,
  setDataArticlesSuceeded,
  setDataArticlesError,
} = articlesSlice.actions;
export default articlesSlice.reducer;
