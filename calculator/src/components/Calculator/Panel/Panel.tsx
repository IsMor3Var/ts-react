import { useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';

const Panel: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  return (
    <div>
      <h2>{calculator.valueScreen}</h2>
      <h3>{calculator?.valueNow}</h3>
    </div>
  );
};

export default Panel;
