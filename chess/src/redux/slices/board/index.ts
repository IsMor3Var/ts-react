import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface IBoard {
  turn: string;
  history: [];
  selectedPiece: object | null;
  possibleMoves: [];
  isCheck: boolean;
  winner: string | null;
}

const initialState: IBoard = {
  turn: 'white',
  history: [],
  selectedPiece: null,
  possibleMoves: [],
  isCheck: false,
  winner: null
};

const SliceBoard = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      console.log('[ MSG ]');
    }
  }
});

export const { increment } = SliceBoard.actions;
export default SliceBoard.reducer;
