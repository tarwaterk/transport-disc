import React from 'react';
import './App.css';
import { HeaderContent } from './components/headerContent/HeaderContent';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <HeaderContent />
      </header>
      <main className='app-main'></main>
    </div>
  );
}

export default App;
