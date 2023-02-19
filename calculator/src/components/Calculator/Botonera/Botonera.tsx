import { ButtonUI } from 'components/ui';
import type { FC } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import {
  addDigit,
  addOperation,
  cleanScreen,
  calculateResult
} from 'redux/slices/calculator';
import { BotoneraData } from 'seed';

const BotoneraComponent: FC = () => {
  const dispatch = useCustomDispatch();

  const handleAddDigit = (value: string): void => {
    dispatch(addDigit(value));
  };

  const handleAddOperation = (value: string): void => {
    dispatch(addOperation(value));
  };

  const handleResult = (): void => {
    dispatch(calculateResult(''));
  };

  const handleReset = (): void => {
    dispatch(cleanScreen(''));
  };

  return (
    <div>
      {BotoneraData.map(({ value, label, id, group }) => (
        <ButtonUI
          key={id}
          title={`${label}`}
          border="none"
          color="cyan"
          height="auto"
          radius="10px"
          width="50px"
          onClick={() => {
            group === 'number' && handleAddDigit(value);
            group === 'operation' && handleAddOperation(value);
            group === 'result' && handleResult();
            group === 'reset' && handleReset();
          }}
        >
          <span>{label}</span>
        </ButtonUI>
      ))}
    </div>
  );
};

export default BotoneraComponent;
