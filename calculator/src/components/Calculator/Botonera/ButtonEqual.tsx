import type { FC } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { calculateResult } from 'redux/slices/calculator';
import { ButtonUI } from 'components/ui';
import { SeedEqual } from 'seed';

export const ButtonEqual: FC = () => {
  const dispatch = useCustomDispatch();

  const handleResult = (): void => {
    dispatch(calculateResult(''));
  };

  return (
    <div>
      <ButtonUI
        key={SeedEqual.id}
        title={`${SeedEqual.value}`}
        border="none"
        color="#5e4242"
        height="50px"
        radius="50%"
        width="50px"
        onClick={() => {
          handleResult();
        }}
      >
        <span>{SeedEqual.label}</span>
      </ButtonUI>
    </div>
  );
};
