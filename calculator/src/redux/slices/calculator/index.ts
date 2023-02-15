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
    setValue: (state, action: PayloadAction<string | null>) => {
      state.value = action.payload;
    }
  }
});

export default calculatorSlice.reducer;
