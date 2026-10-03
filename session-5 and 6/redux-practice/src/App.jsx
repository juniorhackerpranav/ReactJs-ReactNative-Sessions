import Fruits_Component from './Fruits_Component';
import { Provider } from 'react-redux';
import { store } from './redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <Fruits_Component />
    </Provider>
  )
}