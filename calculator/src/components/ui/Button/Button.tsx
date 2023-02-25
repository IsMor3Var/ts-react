import type { FC } from 'react';
import { ButtonStyle } from './style';

interface Props {
  title: string;
  children?: JSX.Element | JSX.Element[];
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  border: string;
  color: string;
}

const Button: FC<Props> = ({
  title,
  border,
  color,
  children,
  height,
  onClick,
  radius,
  width
}) => {
  return (
    <ButtonStyle
      title={title}
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width
      }}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
