import { configureStore } from '@reduxjs/toolkit';
import sliceBoard from './slices/board';

const store = configureStore({
  reducer: {
    board: sliceBoard
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type Dispatch = typeof store.dispatch;

export default store;
