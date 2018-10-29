import { createStore } from 'redux';
import mainReducer from './reducer/main-reducer';

export default () => {
  return createStore(mainReducer);
};
