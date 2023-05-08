import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppContainer from './src/navigation';

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
