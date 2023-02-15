import type { FC } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from 'redux/store';

const Home: FC = () => {
  const { calculator } = useSelector((state: RootState) => state);

  console.log('[ Reducer ]', calculator);

  return <div>Home {calculator.value}</div>;
};

export default Home;
