import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store/configureStore';
import App from './containers/App';


ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);


