import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import indexReducer from './components/reducers/index-reducer';
import AppContainer from './components/containers/app-container.jsx';

const middleware = applyMiddleware(ReduxThunk, logger);
const store = createStore(indexReducer, middleware);

ReactDOM.render(
    <Provider store = {store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);