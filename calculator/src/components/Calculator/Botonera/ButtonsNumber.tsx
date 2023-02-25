import type { FC } from 'react';
import { ButtonUI } from 'components/ui';
import { useCustomDispatch } from 'hooks/redux';
import { addDigit } from 'redux/slices/calculator';
import { SeedNumbers } from 'seed';
import { ButtonsNumberContainer } from './styles';

export const ButtonsNumbers: FC = () => {
  const dispatch = useCustomDispatch();

  const handleAddDigit = (value: string): void => {
    dispatch(addDigit(value));
  };

  return (
    <ButtonsNumberContainer>
      {SeedNumbers.map(({ id, label, value }) => (
        <ButtonUI
          key={id}
          title={`${value}`}
          border="none"
          color="#5e4242"
          height="50px"
          radius="50%"
          width="50px"
          onClick={() => {
            handleAddDigit('0');
          }}
        >
          <span>{label}</span>
        </ButtonUI>
      ))}
    </ButtonsNumberContainer>
  );
};
