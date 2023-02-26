import type { FC } from 'react';
import { BotoneraContainer } from './styles';
import {
  addDigit,
  addOperation,
  calculateResult,
  cleanScreen
} from 'redux/slices/calculator';
import { useCustomDispatch } from 'hooks/redux';
import { ButtonUI } from 'components/ui';
import { SeedNumbers, SeedSigns, SeedClear, SeedEqual } from 'seed';

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
    <BotoneraContainer>
      <ButtonUI
        key={SeedClear[1].id}
        title={`${SeedClear[1].value}`}
        onClick={() => {
          console.log('[ delete end chart ]');
        }}
        color="#16E1B6"
      >
        <span>{SeedClear[1].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedClear[0].id}
        title={`${SeedClear[0].value}`}
        onClick={() => {
          handleReset();
        }}
        color="#16E1B6"
      >
        <span>{SeedClear[0].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedSigns[3].id}
        title={`${SeedSigns[3].label}`}
        onClick={() => {
          handleAddOperation(SeedSigns[3].value);
        }}
        color="#CC5D66"
      >
        <span>{SeedSigns[3].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedSigns[2].id}
        title={`${SeedSigns[2].label}`}
        onClick={() => {
          handleAddOperation(SeedSigns[2].value);
        }}
        color="#CC5D66"
      >
        <span>{SeedSigns[2].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[2].id}
        title={`${SeedNumbers[2].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[2].value);
        }}
      >
        <span>{SeedNumbers[2].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[1].id}
        title={`${SeedNumbers[1].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[1].value);
        }}
      >
        <span>{SeedNumbers[1].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[0].id}
        title={`${SeedNumbers[0].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[0].value);
        }}
      >
        <span>{SeedNumbers[0].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedSigns[1].id}
        title={`${SeedSigns[1].label}`}
        onClick={() => {
          handleAddOperation(SeedSigns[1].value);
        }}
        color="#CC5D66"
      >
        <span>{SeedSigns[1].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[5].id}
        title={`${SeedNumbers[5].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[5].value);
        }}
      >
        <span>{SeedNumbers[5].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[4].id}
        title={`${SeedNumbers[4].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[4].value);
        }}
      >
        <span>{SeedNumbers[4].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[3].id}
        title={`${SeedNumbers[3].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[3].value);
        }}
      >
        <span>{SeedNumbers[3].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedSigns[0].id}
        title={`${SeedSigns[0].label}`}
        onClick={() => {
          handleAddOperation(SeedSigns[0].value);
        }}
        color="#CC5D66"
      >
        <span>{SeedSigns[0].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[8].id}
        title={`${SeedNumbers[8].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[8].value);
        }}
      >
        <span>{SeedNumbers[8].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[7].id}
        title={`${SeedNumbers[7].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[7].value);
        }}
      >
        <span>{SeedNumbers[7].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[6].id}
        title={`${SeedNumbers[6].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[6].value);
        }}
      >
        <span>{SeedNumbers[6].label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedEqual.id}
        title={`${SeedEqual.value}`}
        onClick={() => {
          handleResult();
        }}
        gridArea="4 / 4 / 6 / 5"
        color="#CC5D66"
      >
        <span>{SeedEqual.label}</span>
      </ButtonUI>
      <ButtonUI
        key={SeedNumbers[9].id}
        title={`${SeedNumbers[9].value}`}
        onClick={() => {
          handleAddDigit(SeedNumbers[9].value);
        }}
        gridArea="5 / 1 / 6 / 3"
      >
        <span>{SeedNumbers[9].label}</span>
      </ButtonUI>
      <ButtonUI
        key={'.'}
        title="."
        onClick={() => {
          console.log('[ MSG . ]');
        }}
      >
        <span>.</span>
      </ButtonUI>
    </BotoneraContainer>
  );
};

export default BotoneraComponent;
