import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from './core/reducers'
import rootSaga from './core/sagas';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFCC33"
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root'));