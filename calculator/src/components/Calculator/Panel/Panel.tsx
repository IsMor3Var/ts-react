import { useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';

const Panel: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  return <div>Panel {calculator.value}</div>;
};

export default Panel;
