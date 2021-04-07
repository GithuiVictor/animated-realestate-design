import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle/>
      <Navbar/>
      <Hero/>
    </React.Fragment>
  );
}

export default App;
