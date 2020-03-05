import React from 'react';
import { BrowserRouter as RouterWrapper } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  return (
    <RouterWrapper>
      <Navbar />
      <Routes />
    </RouterWrapper>
  );
}

export default App;
