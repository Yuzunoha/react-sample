import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello';
import Message from './components/Message';
import Name from './components/Name';
import ContainerSample from './components/ContainerSample';
import reportWebVitals from './reportWebVitals';
import Page from './components/ContextSample';
import State1 from './components/State1';
import ReduceCounter from './components/Reducer1';
import ReduceCounter2 from './components/Reducer2';
import { Parent } from './components/Parent';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // JSXタグ
    <>
        <Name />
        <ContainerSample />
        <Page />
        <State1 initialValue={100} />
        <ReduceCounter initialValue={100} />
        <ReduceCounter2 initialValue={100} />
        <Parent />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
