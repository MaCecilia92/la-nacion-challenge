import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ArticlesData } from './initialState'; 

const articlesSlice = createSlice({
	name: 'getImagesFromLocalstorage',
	initialState: ArticlesData,
	reducers: {
    setDataArticlesRequest: (state) => {
      state.isLoading = true
    },
    setDataArticlesSuceeded:(state, action: PayloadAction<[]>) => {
        state.articles= action.payload,
        state.filteredArticles=[] ,
        state.tags= [],
        state.isLoading= false
    },
    setDataArticlesError:(state, action: PayloadAction<string>) => {
      state.error= 'Error'
      state.isLoading = false
    },
    clearArticlesData: () => ArticlesData,
  },
  
});

export const { setDataArticlesRequest, clearArticlesData, setDataArticlesSuceeded, setDataArticlesError } = articlesSlice.actions;
export default articlesSlice.reducer;