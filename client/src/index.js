import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const theme = createMuiTheme({
    palette: {
      primary: {
          main:"#FFCC33"
        },
      secondary: {
        main: '#f44336',
      },
    },
  });
ReactDOM.render(
<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));