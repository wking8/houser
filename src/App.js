import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'


function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Wizard />
    </div>
  );
}

export default App;
