import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import Timer from './Components/Timer'; 
import {Counter, TopHeader} from './Components/Counter';

const myElement = (
<>
  <TopHeader/> 
  <Counter/> 
</> 
); 

ReactDOM.render(

    myElement,
  document.getElementById('root')
);

