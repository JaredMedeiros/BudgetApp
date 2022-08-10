import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import { Provider } from './context/context';
import App from './App'
import './index.css';
import { dark } from '@material-ui/core/styles/createPalette';

const theme = createTheme({
    palette: {
      type: "dark",
      background: {
        paper: '#121212',
      },
    }
  });

ReactDOM.render(
    <SpeechProvider appId = "c77cbd20-31e5-4b48-b024-2fc66be36cf7" language = "en-US">
        <Provider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </SpeechProvider>,   
document.getElementById('root'));
