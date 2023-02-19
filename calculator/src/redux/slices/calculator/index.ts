import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
interface CalculatorState {
  valueScreen: string;
  valueNow: number | null;
  operation: string | null;
  history: string[];
}

const initialState: CalculatorState = {
  valueScreen: '0',
  valueNow: null,
  operation: null,
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

      state.valueNow === null
        ? (state.valueNow = Number(action.payload))
        : (state.valueNow = Number(state.valueNow) + Number(action.payload));
    },
    addOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
      state.history.push(`${state.valueScreen} ${action.payload}`);
      state.valueNow = Number(state.valueScreen);
      state.valueScreen = '';
    },
    calculateResult: (state, _) => {
      if (
        state.operation !== null &&
        state.valueNow !== null &&
        state.valueScreen !== ''
      ) {
        const newValue = parseFloat(state.valueScreen);
        let result: number;
        switch (state.operation) {
          case '+':
            result = state.valueNow + newValue;
            break;
          case '-':
            result = state.valueNow - newValue;
            break;
          case 'x':
            result = state.valueNow * newValue;
            break;
          case '÷':
            result = state.valueNow / newValue;
            break;
          default:
            result = state.valueNow;
            break;
        }
        state.history.push(`${state.valueScreen} = ${result}`);
        state.valueNow = result;
        state.valueScreen = result.toString();
        state.operation = null;
      }
    },
    cleanScreen: (state, _) => {
      state.valueScreen = '';
      state.valueNow = null;
      state.operation = null;
      state.history = [];
    }
  }
});

export const { addDigit, addOperation, calculateResult, cleanScreen } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
