import React from 'react';
import './App.css';
import { Header } from './component/Header';
import { Currencies } from './component/Currencies';
import { Amount } from './component/Amount';

function App() {
  return (
    <div className="App">
      <Header baseAmount={1}/>
      <Currencies />
      <Amount value={1.09} currency={'United States Dollar'}/>

    </div>
  );
}

export default App;
