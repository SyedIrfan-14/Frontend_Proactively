import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Pillars />
    </div>
  );
}

export default App;
