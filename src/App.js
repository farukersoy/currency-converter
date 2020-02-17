import React from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
    <>
    <h1>convert</h1>
    <CurrencyRow/>
    <h1 name="equals">=</h1>
    <CurrencyRow/>
    </>
  );
}

export default App;
