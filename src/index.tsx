import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store/reducers/combineReducers';
import thunk from 'redux-thunk';

//create the store
const store = legacy_createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

export type RootState = ReturnType<typeof store.getState>;
