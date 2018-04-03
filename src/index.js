import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  
, document.getElementById('root'));
registerServiceWorker();
