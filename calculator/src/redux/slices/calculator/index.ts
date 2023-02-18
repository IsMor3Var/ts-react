import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  value: string | null;
}

const initialState: CalculatorState = {
  value: '0'
};

const calculatorSlice = createSlice({
  name: '[Calculator-Slice]',
  initialState,
  reducers: {
    writePanel: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    addition: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    subtraction: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    multiplication: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    division: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    deleteOne: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    },
    deleteAll: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    }
  }
});

export const {
  writePanel,
  addition,
  subtraction,
  multiplication,
  division,
  deleteOne,
  deleteAll
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
