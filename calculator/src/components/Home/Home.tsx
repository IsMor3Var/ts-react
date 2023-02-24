import type { FC } from 'react';
import { Panel, Botonera } from 'components/Calculator';
import { Container } from './styles';

const Home: FC = () => {
  return (
    <Container>
      <h2>Calculator</h2>
      <Panel />
      <Botonera />
    </Container>
  );
};

export default Home;
