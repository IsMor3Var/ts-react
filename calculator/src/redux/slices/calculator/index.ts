import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { CalculateOperation } from 'utils/operations';
interface CalculatorState {
  valueScreen: string;
  valueNow: number;
  valueOperationBefore: string;
  valueOperationAfter: string;
  operation: string;
  history: HistoryState[];
}
interface HistoryState {
  valueScreen: string;
  valueNow: number;
  valueOperationBefore: string;
  valueOperationAfter: string;
  operation: string;
}

const initialState: CalculatorState = {
  valueScreen: '0',
  valueNow: 0,
  valueOperationBefore: '',
  valueOperationAfter: '',
  operation: '',
  history: [
    {
      valueScreen: '0',
      valueNow: 0,
      valueOperationBefore: '',
      valueOperationAfter: '',
      operation: ''
    }
  ]
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

      state.history.push({
        valueScreen: state.valueScreen,
        valueNow: state.valueNow,
        valueOperationBefore: state.valueOperationBefore,
        valueOperationAfter: state.valueOperationAfter,
        operation: state.operation
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

      state.history.push({
        valueScreen: state.valueScreen,
        valueNow: state.valueNow,
        valueOperationBefore: state.valueOperationBefore,
        valueOperationAfter: state.valueOperationAfter,
        operation: state.operation
      });
    },
    calculateResult: (state, _) => {
      state.operation = '';
      state.valueOperationBefore = `${state.valueNow}`;
      state.valueOperationAfter = '';
      state.valueScreen = '0';
    },
    cleanOne: (state, _) => {
      const history: HistoryState[] = [...state.history];
      const historySplice: HistoryState[] = history.splice(
        0,
        history.length - 1
      );

      const historyPop = historySplice.pop();

      if (historyPop !== undefined) {
        state.valueScreen = historyPop.valueScreen;
        state.valueNow = historyPop.valueNow;
        state.valueOperationAfter = historyPop.valueOperationAfter;
        state.valueOperationBefore = historyPop.valueOperationBefore;
        state.operation = historyPop.operation;
        state.history = historySplice;
      }
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
