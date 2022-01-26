import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    document.getElementById('root')
  );
}

serviceWorker.unregister();
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

reportWebVitals();
