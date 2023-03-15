import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const SliceBoard = createSlice({
  name: 'Board',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload
  }
});
// now available:
SliceBoard.actions.increment(2);

export const { increment } = SliceBoard.actions;
export default SliceBoard.reducer;
