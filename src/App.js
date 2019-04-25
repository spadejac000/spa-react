import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar title="Oscars 2019"/>
      <Home title="Oscar Winners" />
    </div>
  );
}

export default App;
