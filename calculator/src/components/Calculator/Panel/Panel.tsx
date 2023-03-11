import { useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';
import { PanelContainer } from './style';

const Panel: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  return (
    <PanelContainer>
      {calculator.valueScreen !== '0' && <span>{calculator.valueScreen}</span>}
      <span>{calculator?.valueNow}</span>
    </PanelContainer>
  );
};

export default Panel;
