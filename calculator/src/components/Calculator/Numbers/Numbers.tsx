import { ButtonUI } from 'components/ui';
import { SeedNumbers } from 'seed';
import type { FC } from 'react';

interface INumbers {
  id: number;
  label: string;
  key: number;
}

const ArrayNumbers: INumbers[] = SeedNumbers;

const NumbersPanel: FC = () => {
  return (
    <div>
      {ArrayNumbers.map(({ key, label }) => (
        <ButtonUI
          key={key}
          title="SUM"
          border="none"
          color="pink"
          height="auto"
          radius="10px"
          width="50px"
          onClick={() => {
            console.log('[ Suma ]');
          }}
        >
          <span>{label}</span>
        </ButtonUI>
      ))}
    </div>
  );
};

export default NumbersPanel;
