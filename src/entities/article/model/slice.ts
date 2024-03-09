import { createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from './services/fetchArticleById';
import { ArticleDetailsSchema } from './types/article-details-schema';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: undefined
};

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleById.pending, state => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
