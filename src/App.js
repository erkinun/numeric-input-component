import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumericInput from './components/NumericInput';
import MoneyInput from './components/MoneyInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label>Numeric Input: </label> <NumericInput />
        <label>Money Input: </label> <MoneyInput />
      </header>
    </div>
  );
}

export default App;
