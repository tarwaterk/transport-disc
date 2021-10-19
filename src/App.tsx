import React from 'react';
import styled from 'styled-components';
import { HeaderContent } from './components/headerContent/HeaderContent';
import { MainContent } from './components/mainContent/MainContent';

const StyledContainer = styled('div')`
  .app-main {
    display: flex;
  }
`;

function App() {
  return (
    <StyledContainer className='app'>
      <header className='app-header'>
        <HeaderContent />
      </header>
      <main className='app-main'>
        <MainContent />
      </main>
    </StyledContainer>
  );
}

export default App;
