import { useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';

const Panel: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  return (
    <div>
      <h2>All: {calculator.valueScreen}</h2>
      <h3>Operation: {calculator?.operation}</h3>
      <h3>Value Now: {calculator?.valueNow}</h3>
      <h3>Value Before: {calculator?.valueBefore}</h3>
    </div>
  );
};

export default Panel;
