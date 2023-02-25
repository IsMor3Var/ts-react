import type { FC } from 'react';
import { BotoneraContainer } from './styles';
import { ButtonsNumbers } from './ButtonsNumber';
import { ButtonsSigns } from './ButtonsSigns';
import { ButtonClear } from './ButtonClear';
import { ButtonEqual } from './ButtonEqual';

const BotoneraComponent: FC = () => {
  return (
    <BotoneraContainer>
      <ButtonsSigns />
      <ButtonsNumbers />
      <ButtonClear />
      <ButtonEqual />
    </BotoneraContainer>
  );
};

export default BotoneraComponent;
