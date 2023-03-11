import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CalculateOperation } from 'utils/operations';
interface CalculatorState {
  valueScreen: string;
  valueNow: number;
  valueOperationBefore: string;
  valueOperationAfter: string;
  operation: string;
  history: string[];
}

const initialState: CalculatorState = {
  valueScreen: '0',
  valueNow: 0,
  valueOperationBefore: '',
  valueOperationAfter: '',
  operation: '',
  history: []
};

const calculatorSlice = createSlice({
  name: '[Calculator-Slice]',
  initialState,
  reducers: {
    addDigit: (state, action: PayloadAction<string>) => {
      if (state.valueScreen === '0') {
        state.valueScreen = action.payload;
      } else {
        state.valueScreen = `${state.valueScreen}${action.payload}`;
      }

      if (state.operation === '') {
        state.valueOperationBefore = `${state.valueOperationBefore}${action.payload}`;
      } else {
        state.valueOperationAfter = `${state.valueOperationAfter}${action.payload}`;
      }

      state.valueNow = CalculateOperation({
        param1: Number(state.valueOperationBefore),
        operation: state.operation,
        param2: Number(state.valueOperationAfter)
      });
    },
    addOperation: (state, action: PayloadAction<string>) => {
      state.operation = action.payload;
      state.valueScreen = `${state.valueScreen}${action.payload}`;

      if (state.operation === '') {
        state.valueNow = Number(state.valueScreen);
      } else {
        state.valueOperationBefore = `${state.valueNow}`;
        state.valueOperationAfter = '';
      }
    },
    calculateResult: (state, _) => {
      state.history.push(`${state.valueScreen} = ${state.valueNow}`);
      state.operation = '';
      state.valueOperationBefore = `${state.valueNow}`;
      state.valueOperationAfter = '';
      state.valueScreen = '0';
    },
    cleanOne: (state, _) => {
      const word: string = state.valueScreen;
      const valueOperationAfter: string = state.valueOperationAfter;
      const wordEnd: string = word.substring(0, word.length - 1);

      const valueOperationAfterEnd = valueOperationAfter.substring(
        0,
        valueOperationAfter.length - 1
      );

      state.valueScreen = wordEnd;
      state.valueOperationAfter = valueOperationAfterEnd;

      state.valueNow = CalculateOperation({
        param1: Number(state.valueOperationBefore),
        operation: state.operation,
        param2: Number(state.valueOperationAfter)
      });
    },
    cleanScreen: (state, _) => {
      state.valueScreen = '0';
      state.valueNow = 0;
      state.valueOperationAfter = '';
      state.valueOperationBefore = '';
      state.operation = '';
    },
    addPoint: (state, action: PayloadAction<string>) => {
      const includePoint = state.valueScreen.includes('.');
      if (!includePoint) {
        state.valueScreen = `${state.valueScreen}${action.payload}`;
        state.valueOperationBefore = `${state.valueOperationBefore}${action.payload}`;
      }
    }
  }
});

export const {
  addDigit,
  addOperation,
  calculateResult,
  cleanOne,
  cleanScreen,
  addPoint
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
