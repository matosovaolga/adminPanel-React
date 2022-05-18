import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import App from './App';

import './index.css';


const store = createStore( composeWithDevTools(applyMiddleware(thunk)));

createRoot(document.getElementById('root')).render(

	<Provider store={store}>
		<HashRouter hashType="slash">
		   	<Routes>
			    <Route
			      exact
			      path='/'
			      element={<App />}
			    />
    		
     		</Routes>
  		</HashRouter>
	</Provider>
);

