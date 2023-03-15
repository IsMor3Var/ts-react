import { useCustomDispatch, useCustomSelector } from 'hooks/redux';
import type { FC } from 'react';
import { increment } from 'redux/slices/board';

export const Board: FC = () => {
  const { board } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleIncrement = (): void => {
    dispatch(increment(2));
  };

  return (
    <div>
      <p>{board.winner}</p>
      <button
        onClick={() => {
          handleIncrement();
        }}
      >
        {' '}
        Plus{' '}
      </button>
    </div>
  );
};
