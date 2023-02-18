import { useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';

const Panel: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  return <h2>{calculator.value}</h2>;
};

export default Panel;
