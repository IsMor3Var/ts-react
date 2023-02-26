import type { FC } from 'react';
import { ButtonStyle } from './style';

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[];
  height?: string;
  onClick: () => void;
  radius?: string;
  width?: string;
  border?: string;
  color?: string;
  gridArea?: string;
}

const Button: FC<Props> = ({ title, children, color, onClick, gridArea }) => {
  return (
    <ButtonStyle
      title={title}
      onClick={onClick}
      style={{
        gridArea,
        color
      }}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
