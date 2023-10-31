import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { HelloWorlApp } from './HelloWorlApp';
import { FirstApp } from './FirtsApp';
import './styles.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorlApp/> */}
        <CounterApp  value={12312} />
    </React.StrictMode>
); 