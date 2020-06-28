import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware,compose} from "redux";
import { Provider } from "react-redux";
import   appStore   from './configureStore';

ReactDOM.render(
  <React.StrictMode>
       <Provider store={appStore}>       
       <App /> 
       
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

