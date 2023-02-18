import { ButtonUI } from 'components/ui';
import type { FC } from 'react';
import { useCustomDispatch } from 'hooks/redux';
import { writePanel } from 'redux/slices/calculator';
import { BotoneraData } from 'seed';

const BotoneraComponent: FC = () => {
  const dispatch = useCustomDispatch();

  const handleWritePanel = (value: number | string): void => {
    dispatch(writePanel(value.toString()));
  };

  return (
    <div>
      {BotoneraData.map(({ value, label, id }) => (
        <ButtonUI
          key={id}
          title={`${label}`}
          border="none"
          color="cyan"
          height="auto"
          radius="10px"
          width="50px"
          onClick={() => {
            handleWritePanel(value);
          }}
        >
          <span>{label}</span>
        </ButtonUI>
      ))}
    </div>
  );
};

export default BotoneraComponent;
