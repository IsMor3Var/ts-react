import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CalculateOperation } from 'utils/operations';
interface CalculatorState {
  valueScreen: string;
  valueBefore: number | null;
  valueNow: number | null;
  operation: string | null;
  history: string[];
}

const initialState: CalculatorState = {
  valueScreen: '0',
  valueBefore: null,
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
      state.valueNow = Number(action.payload);
    },
    addOperation: (state, action: PayloadAction<string>) => {
      const result = CalculateOperation({
        param1: 2,
        operation: '+',
        param2: 2
      });

      console.log('[ MSG ]', result);

      state.valueScreen = `${state.valueScreen} ${action.payload.trim()}`;
      state.operation = action.payload;
      state.history.push(`${state.valueScreen} ${action.payload}`);
    },
    calculateResult: (state, _) => {
      console.log('[ MSG ]', state.valueScreen.split('x'));

      // if (
      //   state.operation !== null &&
      //   state.valueNow !== null &&
      //   state.valueScreen !== ''
      // ) {
      //   const newValue = parseFloat(state.valueScreen);
      //   console.log('[ newValue ]', newValue);
      //   let result: number;
      //   switch (state.operation) {
      //     case '+':
      //       result = state.valueNow + newValue;
      //       break;
      //     case '-':
      //       result = state.valueNow - newValue;
      //       break;
      //     case 'x':
      //       result = state.valueNow * newValue;
      //       break;
      //     case '÷':
      //       result = state.valueNow / newValue;
      //       break;
      //     default:
      //       result = state.valueNow;
      //       break;
      //   }
      //   state.history.push(`${state.valueScreen} = ${result}`);
      //   state.valueNow = result;
      //   state.valueScreen = result.toString();
      //   state.operation = null;
      // }
    },
    cleanScreen: (state, _) => {
      // state.valueScreen = '0';
      // state.valueNow = null;
      // state.operation = null;
    }
  }
});

export const { addDigit, addOperation, calculateResult, cleanScreen } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
