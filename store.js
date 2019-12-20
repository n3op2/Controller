import { createStore, combineReducers } from 'redux';

const root = combineReducers({
  controls: (state, action) => ({
    ...state,
    a: 'a'
  })
});

export default () => createStore(root);
