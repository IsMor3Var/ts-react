import type { FC } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { addOperation } from 'redux/slices/calculator';
import { ButtonUI } from 'components/ui';
import { SeedSigns } from 'seed';
import { ButtonsSignsContainer } from './styles';

export const ButtonsSigns: FC = () => {
  const dispatch = useCustomDispatch();

  const handleAddOperation = (value: string): void => {
    dispatch(addOperation(value));
  };
  return (
    <ButtonsSignsContainer>
      {SeedSigns.map(({ id, label, value }) => (
        <ButtonUI
          key={id}
          title={`${value}`}
          border="none"
          color="#5e4242"
          height="50px"
          radius="50%"
          width="50px"
          onClick={() => {
            handleAddOperation('0');
          }}
        >
          <span>{label}</span>
        </ButtonUI>
      ))}
    </ButtonsSignsContainer>
  );
};
