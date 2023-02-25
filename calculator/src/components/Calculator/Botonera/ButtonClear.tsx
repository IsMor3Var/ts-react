import type { FC } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { cleanScreen } from 'redux/slices/calculator';
import { ButtonUI } from 'components/ui';
import { SeedAllClear } from 'seed';

export const ButtonClear: FC = () => {
  const dispatch = useCustomDispatch();

  const handleReset = (): void => {
    dispatch(cleanScreen(''));
  };

  return (
    <div>
      <ButtonUI
        key={SeedAllClear.id}
        title={`${SeedAllClear.value}`}
        border="1px solid #000"
        color="#5e4242"
        height="50px"
        radius="50%"
        width="50px"
        onClick={() => {
          handleReset();
        }}
      >
        <span>{SeedAllClear.label}</span>
      </ButtonUI>
    </div>
  );
};
