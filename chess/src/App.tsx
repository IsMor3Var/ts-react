import { Board } from 'components/Board';
import { type FC } from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { GlobalStyles } from 'styles/Global';
import { ThemeDark } from 'styles/theme';

const App: FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles theme={ThemeDark} />
      <p>Chess</p>
      <Board />
    </Provider>
  );
};

export default App;
