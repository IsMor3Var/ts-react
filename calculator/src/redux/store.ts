import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from './slices/calculator';

const store = configureStore({
  reducer: {
    calculator: calculatorSlice
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;

export default store;
