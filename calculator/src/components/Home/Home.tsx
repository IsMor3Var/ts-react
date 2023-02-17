import { Fragment } from 'react';
import type { FC } from 'react';
import { useCustomSelector, useCustomDispatch } from 'hooks/redux';
import { setValue } from 'redux/slices/calculator';
import { Operation, Panel, Numbers } from 'components/Calculator';

const Home: FC = () => {
  const { calculator } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleClickMe = (): void => {
    dispatch(setValue('hace algo'));
  };

  return (
    <Fragment>
      <h2>Calculator</h2>
      <Panel />
      <Numbers />
      <Operation />
      <span>{calculator.value}</span>
      <button
        onClick={() => {
          handleClickMe();
        }}
      >
        click me
      </button>
    </Fragment>
  );
};

export default Home;
