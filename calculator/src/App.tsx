import Home from 'components/Home';
import type { FC } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
