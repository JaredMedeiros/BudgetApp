import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client'

import { Provider } from './context/context';
import App from './App'
import './index.css';

ReactDOM.render(
    <SpeechProvider appId = "c77cbd20-31e5-4b48-b024-2fc66be36cf7" language = "en-US">
        <Provider> 
            <App />
        </Provider>
    </SpeechProvider>,   
document.getElementById('root'));
