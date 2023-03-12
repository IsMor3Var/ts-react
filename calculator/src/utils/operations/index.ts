interface IValuesOperation {
  param1: number;
  param2: number;
  operation: string;
}

export const CalculateOperation = (input: IValuesOperation): number => {
  let result: number;
  switch (input.operation) {
    case '+':
      result = input.param1 + input.param2;
      break;
    case '-':
      result = input.param1 - input.param2;
      break;
    case 'x':
      result = input.param1 * input.param2;
      break;
    case '÷':
      result = input.param1 / input.param2;
      break;
    default:
      result = input.param1;
      break;
  }

  return result;
};
