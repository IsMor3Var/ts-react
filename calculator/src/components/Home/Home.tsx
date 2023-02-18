import { Fragment } from 'react';
import type { FC } from 'react';
import { Panel, Botonera } from 'components/Calculator';

const Home: FC = () => {
  return (
    <Fragment>
      <h2>Calculator</h2>
      <Panel />
      <Botonera />
    </Fragment>
  );
};

export default Home;
