import React from 'react';
import './App.css';
import './styles.scss'
import { Header } from './component/Header';
import { Currencies } from './component/Currencies';
import { Amount } from './component/Amount';
import data from './data/currencies'

function App() {
  return (
    <div className="converter">
      <Header baseAmount={1}/>
      <Currencies currenciesList={data}/>
      <Amount value={1.09} currency={'United States Dollar'}/>

    </div>
  );
}

export default App;
