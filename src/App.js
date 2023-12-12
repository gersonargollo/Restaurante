
import './App.css';
import Componest from './Coponentes/Componest';
import React from 'react';
import { Pestañas } from './Coponentes/Pestañas';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Componest></Componest><br/>
        <Pestañas></Pestañas> <br/>
        <br/>
      </header>
    </div>
  );
}

export default App;
