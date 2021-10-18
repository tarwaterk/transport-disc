import React from 'react';
import './App.css';
import { HeaderContent } from './components/headerContent/HeaderContent';
import { MainContent } from './components/mainContent/MainContent';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <HeaderContent />
      </header>
      <main className='app-main'>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
