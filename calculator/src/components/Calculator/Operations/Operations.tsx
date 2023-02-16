import { ButtonUI } from 'components/ui';
import type { FC } from 'react';

const Operations: FC = () => {
  return (
    <div>
      <ButtonUI
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
        <span>+</span>
      </ButtonUI>
      <ButtonUI
        title="REST"
        border="none"
        color="yellow"
        height="auto"
        radius="10px"
        width="50px"
        onClick={() => {
          console.log('[ Resta ]');
        }}
      >
        <span>-</span>
      </ButtonUI>
      <ButtonUI
        title="MULT"
        border="none"
        color="blue"
        height="auto"
        radius="10px"
        width="50px"
        onClick={() => {
          console.log('[ Multiplicacion ]');
        }}
      >
        <span>x</span>
      </ButtonUI>
      <ButtonUI
        title="DIV"
        border="none"
        color="red"
        height="auto"
        radius="10px"
        width="50px"
        onClick={() => {
          console.log('[ Division ]');
        }}
      >
        <span>/</span>
      </ButtonUI>
    </div>
  );
};

export default Operations;
