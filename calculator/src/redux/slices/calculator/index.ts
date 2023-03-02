import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CalculateOperation } from 'utils/operations';
interface CalculatorState {
  valueScreen: string;
  valueNow: number;
  operation: string;
  history: string[];
}

const initialState: CalculatorState = {
  valueScreen: '0',
  valueNow: 0,
  operation: '',
  history: []
};

const calculatorSlice = createSlice({
  name: '[Calculator-Slice]',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      state.valueScreen === '0'
        ? (state.valueScreen = action.payload.trim())
        : (state.valueScreen = `${state.valueScreen} ${action.payload.trim()}`);

      console.log('[ MSG ]', `${state.valueNow}${Number(action.payload)}`);

      state.valueNow !== 0 && state.operation !== ''
        ? (state.valueNow = CalculateOperation({
            param1: Number(state.valueNow),
            operation: state.operation,
            param2: Number(action.payload)
          }))
        : (state.valueNow = Number(
            `${state.valueNow}${Number(action.payload)}`
          ));
    },
    addOperation: (state, action: PayloadAction<string>) => {
      state.valueScreen = `${state.valueScreen} ${action.payload.trim()}`;
      state.operation = action.payload;
    },
    calculateResult: (state, _) => {
      state.history.push(`${state.valueScreen} = ${state.valueNow}`);
      state.operation = '';
    },
    cleanScreen: (state, _) => {
      state.valueScreen = '0';
      state.valueNow = 0;
      state.operation = '';
    }
  }
});

export const { addDigit, addOperation, calculateResult, cleanScreen } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
