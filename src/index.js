//npm package 
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

// Component files
import App from './App';

//style file 
import './index.css';

//Reducer Files 
import {CountryInformationReducer} from './redux/reducer/countryInformationReducer';
import {WeatherInformationReducer} from './redux/reducer/weatherInformationReducer';

//declare of combine Reducer 
const connectreducer = combineReducers({
  country:CountryInformationReducer,
  weather:WeatherInformationReducer
})

//create Store enhancer 
const store = createStore(connectreducer,applyMiddleware(thunk))

// Makes the Redux store available to the connect() calls in the component hierarchy below.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

